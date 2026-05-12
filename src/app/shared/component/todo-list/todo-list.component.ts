import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { itodo } from '../../model/model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconformComponent } from '../getconform/getconform.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input()gettodos !: Array<itodo>
@Output()eventemiterremove : EventEmitter <string> =new EventEmitter<string>()
@Output()eventemiteredittodo : EventEmitter<itodo>=new EventEmitter<itodo>()
  constructor(private _matdailog : MatDialog) { }

  ngOnInit(): void {
  }

  onremove(id:string){
   
   let config=new MatDialogConfig()
   config.width='400 px',
   config.disableClose=true,
   config.data=' are you can sure delete data form data base'
  let confignew= this._matdailog.open(GetconformComponent, config) 
   confignew.afterClosed()
   .subscribe(isconform=> {
    if(isconform){
      this.eventemiterremove.emit(id)
    }
   })
  }

  onedittodo(todo:itodo){
this.eventemiteredittodo.emit(todo)
  }

  tracktodo(index :number, todo:itodo){
    return todo.TodoId
  }

}
