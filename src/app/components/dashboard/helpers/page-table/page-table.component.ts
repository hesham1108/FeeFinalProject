import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageService } from 'src/app/services/pages/pages.service';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['../tables-style.scss']
})
export class PageTableComponent implements OnInit {
  search:string='';
  pages:any[]= [];
  load:boolean = true;
  delete:boolean = false;
  deleteId:number|any;
  constructor(
    private pageSer: PageService , private router: Router , private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.reloadData();
   }

   reloadData(){
     this.pageSer.getPages().subscribe(
       (res)=>{
         console.log(res);
         for(let r of res){
          if(!r.mainBar ){
            r.main = {name:'لا يوجد'};
          }
        }
         this.pages = res.reverse();

         this.load = false;
       },
       (error)=>{
         this.toastr.error('حدث خطأ أثناء تحميل الصفحة');
         this.toastr.info('حاول مرة اخري');
         this.load = false;
       }
     );


   }

   editPage(id:number){
     this.router.navigate(['dash/addPage/' , id]);
   }


   deletePage(){

     document.documentElement.scrollTop = 0;
     this.load=true;
     this.pageSer.deletePage(this.deleteId).subscribe(
       (resp)=>{
       if(resp){
         this.toastr.success('لقد تم مسح الصفحة بنجاح');
         this.delete=false;
         this.reloadData();

       }
     },
     (error)=>{
       this.toastr.error('حدث خطأ أثناء مسح الصفحة ');
       this.toastr.info('حاول مرة اخري');
       this.load = false;
     }
     );
   }

   goTo(dest:string){
     this.router.navigate([dest]);
   }


   ondelete(id:number){
     this.deleteId = id;
       this.delete = true;
   }
   onCancel(){
       this.delete=false;
   }

}
