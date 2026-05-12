import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { itodo } from '../../model/model';
import { uiidservice } from '../../service/uiid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
iseditmode : boolean =false
@ViewChild('TodoItem') TodoItem ! : ElementRef 
@ViewChild('iscomplete') iscomplete ! : ElementRef 
@Output() emitnewtodo :EventEmitter <itodo>=new EventEmitter<itodo>()
@Output() eventemiterupdate :EventEmitter<itodo>=new EventEmitter<itodo>()

@Input()gettodoes !:itodo

  constructor(private _uiid : uiidservice) { }
  ngOnChanges(changes: SimpleChanges): void {
   if(changes['gettodoes'].currentValue){
    this.iseditmode=true
    this.TodoItem.nativeElement.value=this.gettodoes.TodoItem,
    this.iscomplete.nativeElement.value=this.gettodoes.iscomplete
     
   }
  }

  ngOnInit(): void {
    console.log(this.gettodoes)
  }

  onaddtodo(){
    if(this.TodoItem.nativeElement.value.length >0 && this.iscomplete.nativeElement.value.length >0){
      let new_todo:itodo={
      TodoItem:this.TodoItem.nativeElement.value,
      iscomplete:this.iscomplete.nativeElement.value==='true' ? true : false,
      TodoId:this._uiid.uiidfun()
    }
    this.emitnewtodo.emit(new_todo)
    this.TodoItem.nativeElement.value=''
    this.iscomplete.nativeElement.value=true

    }
  }


  onupdate(){
    let updated_todo:itodo={
       TodoItem:this.TodoItem.nativeElement.value,
       TodoId:this.gettodoes.TodoId,
       iscomplete:this.iscomplete.nativeElement.value
    }
    this.eventemiterupdate.emit(updated_todo)
this.TodoItem.nativeElement.value=''
this.iscomplete.nativeElement.value=true
this.iseditmode=false
  }

}
