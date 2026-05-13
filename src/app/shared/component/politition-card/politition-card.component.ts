import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ipoli } from '../../model/politition';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconformComponent } from '../getconform/getconform.component';

@Component({
  selector: 'app-politition-card',
  templateUrl: './politition-card.component.html',
  styleUrls: ['./politition-card.component.scss']
})
export class PolititionCardComponent implements OnInit {
@Input()getpoliticition!:Array<ipoli>
isindeletemode:boolean=false
@Output() eventedit :EventEmitter <ipoli>=new EventEmitter<ipoli>()
@Output() eventdelet :EventEmitter <string>=new EventEmitter<string>()

  constructor(private _matdailog : MatDialog) { }

  ngOnInit(): void {
  }

  oneditbtn(politition:ipoli){
 
this.eventedit.emit(politition)

   

    




  }

  onremove(id:string){
// 
let config=new MatDialogConfig()
config.disableClose=true,
config.width='500px',
config.data=`are you sure delete data`
let matconfig=this._matdailog.open(GetconformComponent, config)
matconfig.afterClosed()
.subscribe((isconform) => {
  if(isconform){
this.eventdelet.emit(id)
  }
})
  }

}
