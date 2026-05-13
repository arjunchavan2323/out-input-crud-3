import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ipoli } from '../../model/politition';
import { uiidservice } from '../../service/uiid.service';

@Component({
  selector: 'app-politition-form',
  templateUrl: './politition-form.component.html',
  styleUrls: ['./politition-form.component.scss']
})
export class PolititionFormComponent implements OnInit , OnChanges{
isinEDITMODE : boolean=false

@Input()getpoliticion!:ipoli
@ViewChild('name') name !:ElementRef
@ViewChild('state') state !:ElementRef
@ViewChild('party') party !:ElementRef
@ViewChild('position') position !:ElementRef
@ViewChild('image') image !:ElementRef


@Output() eventadd :EventEmitter <ipoli>=new EventEmitter<ipoli>()

@Output()eventupdate:EventEmitter <ipoli>=new EventEmitter<ipoli>()

  constructor(private _uiid : uiidservice ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['getpoliticion'].currentValue){
      this.isinEDITMODE=true
      this.name.nativeElement.value=this.getpoliticion.name,
      this.party.nativeElement.value=this.getpoliticion.party,
      this.state.nativeElement.value=this.getpoliticion.state,
      this.position.nativeElement.value=this.getpoliticion.position
      this.image.nativeElement.value=this.getpoliticion.image



    }
  }

  onaddpoliticion(){
    let new_politicion:ipoli={
    name:this.name.nativeElement.value,
    state:this.state.nativeElement.value,
    position:this.position.nativeElement.value,
    party:this.party.nativeElement.value,
    image:this.image.nativeElement.value,
    id:this._uiid.uiidfun()
    
    }
    this.eventadd.emit(new_politicion)

     this.name.nativeElement.value='',
   this.state.nativeElement.value='',
this.position.nativeElement.value='',
   this.party.nativeElement.value='',
   this.image.nativeElement.value=''
  }


  onupdate(){
   if(this.name.nativeElement.value.length >0){
     let update_obj:ipoli={
      name:this.name.nativeElement.value,
      state:this.state.nativeElement.value,
      position:this.position.nativeElement.value,
      party:this.party.nativeElement.value,
      image:this.image.nativeElement.value,
      id:this.getpoliticion.id
    }
    this.eventupdate.emit(update_obj)

      this.name.nativeElement.value=''
      this.state.nativeElement.value=''
      this.position.nativeElement.value=''
      this.party.nativeElement.value=''
      this.image.nativeElement.value=''
      this.isinEDITMODE=false
      
   }
   
  }

}