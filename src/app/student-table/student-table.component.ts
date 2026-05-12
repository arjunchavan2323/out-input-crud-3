import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { istd } from '../shared/model/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconformComponent } from '../shared/component/getconform/getconform.component';
import { itodo } from '../shared/model/model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
@Input()getstudent!:Array<istd>

@Output() eventemitremove :EventEmitter <string>=new EventEmitter<string>()

@Output()eventemiteredit : EventEmitter <istd>=new EventEmitter<istd>()
  constructor(private _matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  ondelete(std:string){

    
  //   let config=new MatDialogConfig()
  //   config.width='400px',
  //   config.disableClose=true,
  //   config.data=`are you sure delete data form data base`

  //  let newconfig= this._matdailog.open(GetconformComponent, config)
  //  newconfig.afterClosed()
  //  .subscribe((isconform)=> {
  //   if(isconform){
  //   this.eventemitremove.emit(std)
  //   }
  //  })











let config=new MatDialogConfig();
config.width='400px';
config.disableClose=true;
config.data=`are u sure delete data from database`
  let matconfig=this._matDialog.open(GetconformComponent,config)
  matconfig.afterClosed().subscribe(isconfirm=>{
    if(isconfirm){
      this.eventemitremove.emit(std)
    }
  }
    
  )
  }

  isactivestatus !:string

  onedit(std:istd){
    this.eventemiteredit.emit(std)
    // this.isactivestatus=true
    this.isactivestatus=std.stdId

  
  }


  trackstudent(index : number, std:istd){
    return std.stdId
  }

}
