import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icrick } from '../shared/model/cricket';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconformComponent } from '../shared/component/getconform/getconform.component';

@Component({
  selector: 'app-cricket-table',
  templateUrl: './cricket-table.component.html',
  styleUrls: ['./cricket-table.component.scss']
})
export class CricketTableComponent implements OnInit {
@Input()getcricket!:Array<icrick>
@Output()eventremove:EventEmitter<string>=new EventEmitter <string>()
@Output()eventedit:EventEmitter<icrick>=new EventEmitter <icrick>()


  constructor(private _matdailog : MatDialog) { }

  ngOnInit(): void {
  }

  isActivestatus! : string

  onremove(id:string){
    // 
    let config=new MatDialogConfig()
    config.width='400px',
    config.disableClose=true,
    config.data=`are you sure delete data`
   let matdailogrefco= this._matdailog.open(GetconformComponent, config)
   matdailogrefco.afterClosed()
   .subscribe((isconform) => {
    if(isconform){
this.eventremove.emit(id)
    }
   })
  }

  oneditbtn(crick:icrick){
if(crick.id){
      
this.eventedit.emit(crick)
this.isActivestatus=crick.id

}

  }

}
