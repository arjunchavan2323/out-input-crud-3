import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { istd } from '../shared/model/student';
import { uiidservice } from '../shared/service/uiid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {
isINEDITMODE : boolean=false
@Input() getstdobj !:istd

@ViewChild('fname') fname ! :ElementRef

@ViewChild('lname') lname ! :ElementRef


@ViewChild('email') email ! :ElementRef


@ViewChild('contact') contact ! :ElementRef


@ViewChild('isactive') isactive ! :ElementRef

@Output()eventemitaddstd:EventEmitter<istd>=new EventEmitter<istd>()
@Output()eventemitupdate:EventEmitter<istd>=new EventEmitter<istd>()

  constructor(private _uiidser : uiidservice) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['getstdobj'].currentValue){
      this.isINEDITMODE=true
      this.fname.nativeElement.value=this.getstdobj.fname,
      this.lname.nativeElement.value=this.getstdobj.lname,
      this.email.nativeElement.value=this.getstdobj.email,
      this.contact.nativeElement.value=this.getstdobj.contact

    }
  }

  ngOnInit(): void {
  }

  onaddstudent(){
if(this.fname.nativeElement.value.length >0){
     let new_student:istd={
    fname:this.fname.nativeElement.value,
    lname:this.lname.nativeElement.value,
    email:this.email.nativeElement.value,
    contact:this.contact.nativeElement.value,
    isactive:this.isactive.nativeElement.value==='true' ? true :false,
    stdId:this._uiidser.uiidfun()
   }
   this.eventemitaddstd.emit(new_student)
       
  this.fname.nativeElement.value=''
  this.lname.nativeElement.value=''
  this.email.nativeElement.value=''
    this.contact.nativeElement.value=''
    this.isactive.nativeElement.value=true
}
  }


  onupdate(){
    let update_obj:istd={
      fname:this.fname.nativeElement.value,
      lname:this.lname.nativeElement.value,
      email:this.email.nativeElement.value,
      contact:this.contact.nativeElement.value,
      stdId:this.getstdobj.stdId,
      isactive:this.isactive.nativeElement.value==='true'
    }
    this.eventemitupdate.emit(update_obj)

   this.fname.nativeElement.value=''
  this.lname.nativeElement.value='',
   this.email.nativeElement.value='',
   this.contact.nativeElement.value='',

      this.isactive.nativeElement.value='true'
      this.isINEDITMODE=false
  }

}
