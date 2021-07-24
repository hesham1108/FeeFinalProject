import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageService } from 'src/app/services/pages/pages.service';


@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss']

})
export class RightNavComponent implements OnInit {

  mainBars:any[]=[];
  constructor(private router: Router , private route: ActivatedRoute ,private pageSer:PageService , private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.pageSer.getMainBar().subscribe(
      (res)=>{
        this.mainBars = res;
      },
      (error)=>{
        this.toastr.error('لقد حدث خطأ أثناء تحميل العناوين');
        this.toastr.info('حاول مرة أخري');
        console.log(error);
      }
    )
  }
  goTo(dest: string){
    document.documentElement.scrollTop = 0;
    this.router.navigate([dest]);
  }
  goToNewPage(id:number){
    this.router.navigate(['newPage',id]);
  }

}
