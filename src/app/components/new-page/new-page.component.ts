import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageService } from 'src/app/services/pages/pages.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {
  load:boolean = true;
  nothing:boolean = true;
  mainBarId:number|any;
  pages:any;
  page:any;
  constructor(private pagSer: PageService,private toastr:ToastrService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.mainBarId = +data['id'];
          this.pagSer.getPagesbyMainId(this.mainBarId).subscribe(
            (res)=>{
              this.pages = res;
              this.load=false;
            },
            (error)=>{
              this.toastr.error('حدث خطأ أثناء تحميل كل الصفحات');
              this.toastr.info('حاول مرة اخري');
              this.router.navigate(['']);
            }
          );
        }
      }
    );

  }

  getPageDetails(id:number){
    this.load = true;
    this.nothing=false;
    this.pagSer.getPage(id).subscribe(
      (res)=>{
        this.page = res;
        console.log(res);

        this.load= false;
      }
    );

  }
}
