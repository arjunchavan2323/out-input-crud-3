import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { icrick } from '../shared/model/cricket';
import { uiidservice } from '../shared/service/uiid.service';

@Component({
  selector: 'app-cricket-form',
  templateUrl: './cricket-form.component.html',
  styleUrls: ['./cricket-form.component.scss']
})
export class CricketFormComponent implements OnInit, OnChanges {
isEDITMODE :boolean=false
@Input()getcricket!:icrick

@ViewChild('name') name !:ElementRef

@ViewChild('country') country !:ElementRef

@ViewChild('role') role !:ElementRef

@ViewChild('team') team !:ElementRef

@Output()eventadd: EventEmitter<icrick>=new EventEmitter<icrick>()
@Output()eventupdate: EventEmitter<icrick>=new EventEmitter<icrick>()


  constructor(private _uiid : uiidservice) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //  let val=changes['getcricket'].currentValue
    if(changes['getcricket'].currentValue){
      this.isEDITMODE=true;
     this.name.nativeElement.value=this.getcricket.name,
     this.country.nativeElement.value=this.getcricket.country,
     this.team.nativeElement.value=this.getcricket.team,
     this.role.nativeElement.value=this.getcricket.role


    }
  }

  onaddbtn(){
    if(this.name.nativeElement.value.length >0){
      let new_crick:icrick={
      name:this.name.nativeElement.value,
      country:this.country.nativeElement.value,
      role:this.role.nativeElement.value,
      team:this.team.nativeElement.value,
    id:this._uiid.uiidfun()

    }
    this.eventadd.emit(new_crick)
    this.name.nativeElement.value=''
     this.country.nativeElement.value=''
      this.role.nativeElement.value=''
      this.team.nativeElement.value=''
    }
    
  }

  onupdate(){
    let updateobj:icrick={
      name:this.name.nativeElement.value,
      role:this.role.nativeElement.value,
      country:this.country.nativeElement.value,
      team:this.team.nativeElement.value,
     id:this.getcricket.id


    }
this.eventupdate.emit(updateobj)
     this.name.nativeElement.value=''
      this.role.nativeElement.value='',
      this.country.nativeElement.value='',
      this.team.nativeElement.value=''
      this.isEDITMODE=false
      
  }
}