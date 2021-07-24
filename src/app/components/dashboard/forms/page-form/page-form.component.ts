import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { PageService } from 'src/app/services/pages/pages.service';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.scss']
})
export class PageFormComponent implements OnInit {

  imgSrc:any;
  pageForm:any;
  id:number|any;
  load:boolean = true;
  edit:boolean =false;
  delete:boolean = false;
  page:any;
  mainBarsList:any[]=[];
  mainBarSettings:IDropdownSettings={};
  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private newsSer:HomeNewsCardServiceService,
    private toastr:ToastrService,
    private pageSer:PageService
    ) {
    this.pageForm = this.fb.group({
      title:[null , [Validators.required]],
      image:[null,[Validators.required]],
      descriptions:[null , [Validators.required]],
      mainBarId:[null,[Validators.required]]
    })
  }
  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.pageSer.getMainBar().subscribe(
      (m)=>{
        this.mainBarsList = m;
      }
    );
    this.mainBarSettings={
      idField: 'id',
      textField:'title',
      singleSelection:true,
      searchPlaceholderText:'ابحث عن العنوان',
      allowSearchFilter: true,
      itemsShowLimit: 3,
      showSelectedItemsAtTop: true,
      closeDropDownOnSelection:true,
      allowRemoteDataSearch:true
    };
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
          this.pageSer.getPage(this.id).subscribe(
            (res)=>{
              this.page = res;
              console.log(res);

              this.pageForm.get('title').setValue(this.page.title);
              this.pageForm.get('descriptions').setValue(this.page.description);
              this.pageForm.get('image').setValue(this.page.image );
              for(let m of this.mainBarsList){
                if(m.id == this.page.mainBarId){
                  this.pageForm.get('department').setValue([{id:m.id , name:m.title}]);
                }
              }
              this.imgSrc = this.page.image as string;
              this.load = false;
            },
            (error)=>{
              this.toastr.error('حدث خطأ أثناء تحميل الصفحة');
              this.toastr.info('حاول مرة اخري');
              this.load= false;
              this.router.navigate(['pageTable']);
            }
          );
        }else{
          this.edit = false;
          this.load = false;
        }
      }
    );

  }


  onSubmit(){
    this.load = true;
    let dataToPost:{id?:number , title:string , descriptions:string ,image:string , mainBarId:number}={
      id:this.id,
      title:this.pageForm.get('title').value,
      descriptions:this.pageForm.get('descriptions').value,
      image:this.pageForm.get('image').value,
      mainBarId:this.pageForm.get('mainBarId').value[0].id
    };
    console.log(dataToPost);

    if(this.edit){
      if(this.pageForm.valid){
        this.pageSer.putPage(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  تعديل الصفحة بنجاح');
            document.documentElement.scrollTop = 0;
            // this.pageSer.getDeps();
            this.router.navigate(['departmentTable']);
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء تعديل الصفحة');
            this.toastr.info('حاول مرة اخري');
            this.load= false;
          }
        );
      }
    }else{
      if(this.pageForm.valid){
        this.pageSer.postPage(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم إضافة الصفحة بنجاح');
            document.documentElement.scrollTop = 0;
            // this.pageSer.getDeps();
            this.router.navigate(['pageTable']);
          },
          (error)=>{
            console.log(error);
            this.toastr.error('حدث خطأ أثناء إضافة الصفحة ');
            this.toastr.info('حاول مرة اخري');
            this.load=false;
          }
        );
      }
    }
  }

  deletePage(id:number|any){
    this.load = true;
    this.pageSer.deletePage(id).subscribe(
      (res)=>{
        if(res){
          this.toastr.success('لقد تم مسح الصفحة بنجاح');
          this.load = false;
          this.delete = false;
          document.documentElement.scrollTop = 0;
          this.router.navigate(['pageTable']);
        }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح الصفحة ');
        this.toastr.info('حاول مرة اخري');
        this.load=false;
      }
    );

    this.pageForm.reset();
    this.onCancel();
  }
  ondelete(){
    this.delete=true;
  }
  onCancel(){
    this.delete=false;
  }
  ngOnDestroy():void{
    this.newsSer.nothing.next(false);
    this.edit = false;
  }

  onImageChange(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        this.imgSrc = reader.result as string;
        this.pageForm.patchValue({
          image: reader.result
        })
      }
    }
  }
}
