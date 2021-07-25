import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/services/news/card.model';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit , OnDestroy{
  subImages:any[] = [];
  imgSrc:string|any;
  subImgSrc:string|any;
  newsFrom:any;
  id:number|any;
  edit:boolean =false;
  news:Card|any;
  load:boolean = true;
  delete:boolean=false;
  constructor(
    private fb: FormBuilder ,
    private router: Router ,
    private route:ActivatedRoute,
    private newsSer: HomeNewsCardServiceService,
    private toastr: ToastrService
    ) {
    this.newsFrom = this.fb.group({
      title: [null , [Validators.required ]],
      imagePath:[null,[Validators.required]],
      description:[null,[Validators.required]],
      newsSubImages:[null]
    })
   }

  ngOnInit(): void {
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          console.log(this.edit);
          this.edit = true;
          this.id = +data['id'];
          this.newsSer.getCardFromAllCards(this.id).subscribe(
            (res)=> {
              if(res.status == 200){
                this.news = res.body;
                this.newsFrom.get('title').setValue(this.news.title) ;
                this.newsFrom.get('description').setValue(this.news.description);
                this.newsFrom.get('imagePath').setValue(this.news.imagePath);
                this.imgSrc = this.news.imagePath as string;
                this.load=false;
              }
            },
            (error)=>{
              this.toastr.error('حدث خطأ أثناء تحميل الخبر');
              this.toastr.info('حاول مرة اخري');
              this.load= false;
              this.router.navigate(['newsTable']);
            }
          );


          // var recDate =new Date(this.news.createdAt) ;

          // var validDate = recDate.getDate()+"/"+recDate.getMonth()+"/"+recDate.getFullYear();

        }else{
          this.edit = false;
          this.load=false;
        }
      }
    );
  }
  onSubmit(){
    this.load = true;
    let dataToPost:{id?:number,title:string , imagePath:string , description:string , newsSubImages:any[]} = {
      id : this.id,
      title : this.newsFrom.get('title').value,
      imagePath: this.newsFrom.get('imagePath').value,
      description : this.newsFrom.get('description').value,
      newsSubImages:this.newsFrom.get('newsSubImages').value
    };

    console.log(this.newsFrom.value);


    if(this.edit){
      if(this.newsFrom.valid){
        document.documentElement.scrollTop = 0;
        this.newsSer.putNews(dataToPost).subscribe(
          (res)=>{
            if(res){
              this.toastr.success('لقد تم تعديل الخبر بنجاح');
              this.router.navigate(['newsTable']);
            }
          },
          (error)=>{
            this.toastr.error('حدث خطأ أثناء تعديل الخبر ');
            this.toastr.info('حاول مرة اخري');
            this.load=false;
          }
        );


      }
    }else{
      if(this.newsFrom.valid){

        this.newsSer.postNews(dataToPost).subscribe(
          (respo)=>{
            if(respo){
              console.log(respo);

              this.toastr.success('لقد تم إضافة الخبر بنجاح');
              document.documentElement.scrollTop = 0;
              this.router.navigate(['newsTable']);
            }

          },
          (error)=>{
            console.log(error);

            this.toastr.error('حدث خطأ أثناء إضافة الخبر ');
            this.toastr.info('حاول مرة اخري');
            this.load=false;
          }
        );

      }
    }


  }

  deleteNews(i:number){
    this.load = true;
    this.newsSer.deleteNews(i).subscribe((resp)=>{
      this.toastr.success('لقد تم مسح الخبر بنجاح');
      this.load = false;
      this.delete= false;
      document.documentElement.scrollTop = 0;
      this.router.navigate(['newsTable']);

    } , error=>{
      console.log(error);
      this.toastr.error('حدث خطأ أثناء مسح الخبر ');
      this.toastr.info('حاول مرة اخري');
      this.load=false;
    });
    this.newsFrom.reset();
    this.onCancel();

  }

  ngOnDestroy(): void {
    this.newsSer.nothing.next(false);
    this.edit = false;
  }

  ondelete(){
    this.delete=true;
  }
  onCancel(){
    this.delete=false;
  }

  onImageChange(event:any){
    // creating  an object of the  file reader
    const reader = new FileReader();
    //check if we have a value or not
    if(event.target.files && event.target.files.length){
      // store the comming file into a var
      const [file] = event.target.files;
      //convert the file with file reader to a string
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        this.imgSrc = reader.result as string;
        // send the result to the object that will
        // be posted to the server
        this.newsFrom.patchValue({imagePath: reader.result})
      }
    }
  }

  onSubImagesChange(event:any){
    if(event.target.files && event.target.files.length){
      const file = event.target.files;
      for(let f of file){
        let reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onload = ()=>{
          this.subImages.push(reader.result);
        }
      }
      this.newsFrom.patchValue({
        newsSubImages:this.subImages
      })
  }
  }}
