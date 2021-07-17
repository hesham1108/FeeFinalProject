import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeNewsCardServiceService } from 'src/app/services/news/home-news-card-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-sub-depend-form',
  templateUrl: './sub-depend-form.component.html',
  styleUrls: ['./sub-depend-form.component.scss']
})
export class SubDependFormComponent implements OnInit , OnDestroy {

  dropdownList: {id:number , text:string}[]= [];
  selectedItems:{id:number , text:string}[] = [];
  dropdownSettings:IDropdownSettings = {};

  subDependForm:any;
  id:number|any;
  load:boolean = false;
  edit:boolean = false;
  delete:boolean = false;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private newsSer: HomeNewsCardServiceService
  ) {
    this.subDependForm = this.fb.group({
      subject:[null,[Validators.required]],
      depend:[null,[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.dropdownList = [
      { id: 1, text: 'Mumbai' },
      { id: 2, text: 'Bangaluru' },
      { id: 3, text: 'Pune' },
      { id: 4, text: 'Navsari' },
      { id: 5, text: 'New Delhi' }
    ];
    this.selectedItems = [
      { id: 3, text: 'Pune' },
      { id: 4, text: 'Navsari' }
    ];
    this.dropdownSettings= {
      singleSelection: true,
      idField: 'id',
      textField: 'text',
      enableCheckAll: false,
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.newsSer.nothing.next(false);
    this.route.params.subscribe(
      (data)=>{
        if(data['id']){
          this.edit = true;
          this.id = +data['id'];
        }else{
          this.edit = false;
          this.load=false;
        }
      }
    );
  }
  onSubmit(){
    document.documentElement.scrollTop = 0;
    // console.log(this.subDependForm.value);
    if(this.edit){
      if(this.subDependForm.valid){
        this.toastr.success('لقد تم  إضافة المتطلب بنجاح');
        console.log(this.subDependForm.value);
      }
    }else{
      if(this.subDependForm.valid){
        this.toastr.success('لقد تم  تعديل المتطلب بنجاح');
        console.log(this.subDependForm.value);
      }
    }
  }

  deleteDepend(id:number|any){
    this.toastr.success('لقد تم مسح المتطلب بنجاح');
    this.subDependForm.reset();
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

}
