import { Component, OnInit } from '@angular/core';
import { icrick } from '../shared/model/cricket';

@Component({
  selector: 'app-cricket-dashbord',
  templateUrl: './cricket-dashbord.component.html',
  styleUrls: ['./cricket-dashbord.component.scss']
})
export class CricketDashbordComponent implements OnInit {
  editcricket!:icrick
cricketPlayers:Array<icrick> = [
  {
    name: "Virat Kohli",
    country: "India",
    role: "Batsman",
    team: "RCB",
  
    id:'11'
  },
  {
    name: "Rohit Sharma",
    country: "India",
    role: "Batsman",
    team: "Mumbai Indians",

     id:'131'
  },
  {
    name: "MS Dhoni",
    country: "India",
    role: "Wicket Keeper",
    team: "CSK",

     id:'1441'
  }
];
  constructor() { }

  ngOnInit(): void {
  }

  onaddbtn(stdadd:icrick){
  this.cricketPlayers.push(stdadd)
  }

  onremove(id:string){
    let getindex=this.cricketPlayers.findIndex(c => (c.id===id))
    this.cricketPlayers.splice(getindex, 1)
  }

  oneditbtn(editck:icrick){
   this.editcricket=editck
  }

  onupdate(update:icrick){
    let getindex=this.cricketPlayers.findIndex(t => (t.id===update.id))
    this.cricketPlayers[getindex]=update
  }

}
