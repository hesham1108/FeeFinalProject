import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { UserService } from 'src/app/services/user/user-service';


@Component({
  selector: 'app-postion-form',
  templateUrl: './postion-form.component.html',
  styleUrls: ['./postion-form.component.scss']
})
export class PostionFormComponent implements OnInit {

  postion:any;
  //------------------------
  postionForm:any;
  load:boolean = true;
  edit:boolean =false;
  id:number|any;
  delete:boolean = false;
  constructor(
    private fb:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private route:ActivatedRoute,
    private newsSer:HomeNewsCardServiceService,
    private userSer:UserService
    ) {
      this.postionForm = this.fb.group({
        name:[null,[Validators.required]],
        })
    }

  ngOnInit(): void {

    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit=true;
          this.id = +data['id'];
          this.userSer.getSinglePostion(this.id).subscribe(
            (res)=>{
              this.postion = res;
              this.postionForm.get('name').setValue(this.postion.name);
              this.load = false;
            },
            (error)=>{
              this.toastr.error('حدث خطأ أثناء تحميل المنصب');
              this.toastr.info('حاول مرة اخري');
              this.load= false;
              this.router.navigate(['postionTable']);
            }
          );
        }else{
          this.edit= false;
          this.load = false;
        }
      }
    );
  }

  onSubmit(){

    this.load = true;
    let dataToPost:{id?:number , name: string }={
      id:this.id,
      name:this.postionForm.get('name').value
    } ;
    if(this.edit){
      if(this.postionForm.valid){
        this.userSer.putPostion(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم  تعديل القسم بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['postionTable']);
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء تعديل القسم');
            this.toastr.info('حاول مرة اخري');
            this.load= false;
          }
        );
      }
    }else{
      if(this.postionForm.valid){
        this.userSer.postPostion(dataToPost).subscribe(
          (res)=>{
            this.toastr.success('لقد تم إضافة القسم بنجاح');
            document.documentElement.scrollTop = 0;
            this.router.navigate(['postionTable']);
          },
          (error)=>{
            console.log(error);
            this.toastr.error('حدث خطأ أثناء إضافة القسم ');
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
  deletePostion(id:number|any){
    this.load = true;
    this.userSer.deletePostion(id).subscribe(
      (res)=>{
        if(res){
          this.toastr.success('لقد تم مسح المنصب بنجاح');
          this.load = false;
          this.delete = false;
          document.documentElement.scrollTop = 0;
          this.router.navigate(['postionTable']);
        }
      },
      (error)=>{
        this.toastr.error('حدث خطأ أثناء مسح المنصب ');
        this.toastr.info('حاول مرة اخري');
        this.load=false;
      }
    );
    this.postionForm.reset();
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
