import { Component, OnInit } from '@angular/core';
import { itodo } from '../../model/model';
import { snackbarservice } from '../../service/snackbar.service';

@Component({
  selector: 'app-todo-dashbord',
  templateUrl: './todo-dashbord.component.html',
  styleUrls: ['./todo-dashbord.component.scss']
})
export class TodoDashbordComponent implements OnInit {
editobjtodo !:itodo
   TodoArray:Array<itodo>=[
    {
      TodoItem:'Angular ',
      TodoId:'344',
      iscomplete:true
    },
    {
      TodoItem:'React',
      TodoId:'3444',
      iscomplete:false
    },
       {
      TodoItem:'Node.js',
      TodoId:'34444',
      iscomplete:true
    }
   ]
  constructor(private _snackbar : snackbarservice) { }

  ngOnInit(): void {
  }

  onaddtodos(todo:itodo){
    this.TodoArray.push(todo)
    this._snackbar.opensnackbar(`Todo is Added succefully ${todo.TodoItem}`)
  }


  onremovet(todoremove:string){
    let getIndex=this.TodoArray.findIndex(t => (t.TodoId===todoremove))
   let newd= this.TodoArray.splice(getIndex, 1)
    this._snackbar.opensnackbar(`Todo is Removed succefully ${newd[0].TodoItem}`)

  }

  onedittodo(edittodo:itodo){
   this.editobjtodo=edittodo
  }

  onupdate(updatetodo:itodo){
    let getindex=this.TodoArray.findIndex(t => (t.TodoId===updatetodo.TodoId))

    this.TodoArray[getindex]=updatetodo
  }


}
