import { Component, OnInit } from '@angular/core';
import { istd } from '../shared/model/student';
import { MatDialog } from '@angular/material/dialog';
import { snackbarservice } from '../shared/service/snackbar.service';

@Component({
  selector: 'app-student-dashbord',
  templateUrl: './student-dashbord.component.html',
  styleUrls: ['./student-dashbord.component.scss']
})
export class StudentDashbordComponent implements OnInit {
editobjstd !:istd
  StudentArr:Array<istd>=[
    {
      fname:'jhon',
      lname:'Doe',
      email:'jhondoe@gmail.com',
      contact:'12345',
      isactive:true,
      stdId:'12'
    },

       {
      fname:'Angular',
      lname:'java',
      email:'Angulardoe@gmail.com',
      contact:'1234335',
      isactive:false,
      stdId:'1244'
    },
      {
      fname:'REACT',
      lname:'Redux',
      email:'REACTdoe@gmail.com',
      contact:'123434435',
      isactive:true,
      stdId:'12454'
    }  ]

  
  constructor(private _snackbarser : snackbarservice) { }

  ngOnInit(): void {
  
  }

  onaddstd(std:istd){
    this.StudentArr.push(std)
    this._snackbarser.opensnackbar(`todo is added succefully ${std.fname}`)
 
  }

  onremove(std1:string){
    let getIndex=this.StudentArr.findIndex(t => (t.stdId===std1))
   let neddw= this.StudentArr.splice(getIndex, 1)
    this._snackbarser.opensnackbar(`todo is added succefully ${neddw[0].fname}`)

  }


  onedit(editstd:istd){
this.editobjstd=editstd
  }


  onupdate(updateobj:istd){
    let getindex=this.StudentArr.findIndex(t => (t.stdId===updateobj.stdId))
    this.StudentArr[getindex]=updateobj
   
  
   
  }

}
