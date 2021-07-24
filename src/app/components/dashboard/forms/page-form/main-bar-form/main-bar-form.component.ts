import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { PageService } from 'src/app/services/pages/pages.service';

@Component({
  selector: 'app-main-bar-form',
  templateUrl: './main-bar-form.component.html',
  styleUrls: ['./main-bar-form.component.scss']
})
export class MainBarFormComponent implements OnInit {

  load:boolean = true;
  delete:boolean = false;
  edit:boolean = false;
  mainBarForm :any;
  id:number|any;
  mainBar:any;
  deleteId:number|any;
  constructor(
    private fb:FormBuilder,
    private newsSer: HomeNewsCardServiceService,
    private pageSer: PageService,
    private toastr: ToastrService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.mainBarForm = this.fb.group({
      title:[null,[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit=true;
          this.id= +data['id'];
          this.pageSer.getSingleMainBar(+data['id']).subscribe(
          (res)=>{
            this.mainBar = res;
            this.mainBarForm.get('title').setValue(this.mainBar.title);
            this.load = false;
          },
          (error)=>{
            this.load=false;
            this.toastr.error('لقد حدث خطأ فى تحميل العنوان');
            this.toastr.info('حاول مرة اخري');
          }
          );
        }else{
          this.edit = false;
          this.load=false;
        }
      }
    );
  }
  onSubmit(){
    this.load= true;
    let dataToPost:{id?:number,title:string}={
      id:this.id,
      title:this.mainBarForm.get('title').value
    };
    if(this.edit){
      if(this.mainBarForm.valid){
      this.pageSer.putMainBar(dataToPost).subscribe(
        (res)=>{
          if(res){
            this.toastr.success('لقد تم تعديل العنوان بنجاح');
            this.router.navigate(['mainBarTable']);
          }
        },
        (error)=>{
          this.toastr.error('حدث خطأ أثناء تعديل العنوان ');
          this.toastr.info('حاول مرة اخري');
          this.load=false;
        }
      );
      }
    }else{
      if(this.mainBarForm.valid){
        this.pageSer.postMainBar(dataToPost).subscribe(
          (respo)=>{
            if(respo){
              console.log(respo);
              this.toastr.success('لقد تم إضافة العنوان بنجاح');
              document.documentElement.scrollTop = 0;
              this.router.navigate(['mainBarTable']);
            }

          },
          (error)=>{
            console.log(error);
            this.toastr.error('حدث خطأ أثناء إضافة العنوان ');
            this.toastr.info('حاول مرة اخري');
            this.load=false;
          }
        );
    }
  }

  }
  ondelete(){
    this.delete=true;
  }
  deleteMainBar(i:number){
    this.load = true;
    this.pageSer.deleteMainBar(i).subscribe((resp)=>{
      this.toastr.success('لقد تم مسح العنوان بنجاح');
      this.load = false;
      this.delete= false;
      document.documentElement.scrollTop = 0;
      this.router.navigate(['mainBarTable']);

    } , error=>{
      console.log(error);
      this.toastr.error('حدث خطأ أثناء مسح العنوان ');
      this.toastr.info('حاول مرة اخري');
      this.load=false;
    });
    this.mainBarForm.reset();
    this.onCancel();
  }

  onCancel(){
    this.delete=false;
  }
  ngOnDestroy():void{
    this.newsSer.nothing.next(false);
    this.edit = false;
  }
}
