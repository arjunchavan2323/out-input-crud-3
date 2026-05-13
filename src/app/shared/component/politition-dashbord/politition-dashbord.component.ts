import { Component, OnInit } from '@angular/core';
import { ipoli } from '../../model/politition';

@Component({
  selector: 'app-politition-dashbord',
  templateUrl: './politition-dashbord.component.html',
  styleUrls: ['./politition-dashbord.component.scss']
})
export class PolititionDashbordComponent implements OnInit {
  editpoliticion !:ipoli
 indianPoliticians:Array<ipoli> = [
  {
    name: "Narendra Modi",
    party: "Bharatiya Janata Party",
    position: "Prime Minister",
    state: "Gujarat",
    image:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRof3JMA1xMickV894vRwvYicR1XVFMxg-FLafMcDgQJW29ZJOFZV7kHlw3WSmrL9eex2-YtCQDgmo1ZSOkO6-scMu6zRGtK3ZpUOwFxORk-r9ZLDlg480vGE2OGiu3XnTaQw3PVXfhHA2S&s=19",
    id:'12573'
  },
  {
    name: "Rahul Gandhi",
    party: "Indian National Congress",
    position: "Member of Parliament",
    state: "Uttar Pradesh",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBSX3xMrX9bx3HKwdc7NBENiHhyXKnoE97D3BCwIZXN2o8fBaMnSh6jLlLnBqOGxQmXwBpIq4IwYQNADuO8W3MeiYj9FUFXlC7fgu4RWISg&s=10",
    id:'123'
  },
  {
    name: "Amit Shah",
    party: "Bharatiya Janata Party",
    position: "Home Minister",
    state: "Gujarat",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXgR3v8B2wkUwgisTqyVnZuFKWgjw_FNJBGY8m9NsHQLmVpR3aT9C1e7-DcfRUw-DDr56NOep3h4lrDkuRDFXDXC4Ts11uyclfLftLzZ9EA&s=10",
    id:'1233'
  },
  {
    name: "Arvind Kejriwal",
    party: "Aam Aadmi Party",
    position: "Politician",
    state: "Delhi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsIu-bxD-cIs5BjGBG8PsqL402Z6eVDw6fxQZ2bDVvGa1QED08nILv4egRYCloE2ysr1IpIUHx5bf3hjR7gDLKbu-fZgt21CECVk3uAexfA&s=10",
    id:'1263'
  },
  {
    name: "Mamata Banerjee",
    party: "Trinamool Congress",
    position: "Chief Minister",
    state: "West Bengal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVeRbZjORF_QGKvwEhDESv_P3XmBov7Eq4BpewZmgOySKkPhYJKGkpfta-B5iI2pH76I9MBks_UQmvSOizMgpsV9Q6MC-VB7oCT2tGar3Y&s=10",
    id:'12553'
  }
];

onaddevnt(addpoli:ipoli){
  this.indianPoliticians.push(addpoli)
}
  constructor() { }

  ngOnInit(): void {
  }

  oneditb(poliedit:ipoli){
this.editpoliticion=poliedit
  }

  onupdate(update:ipoli){
    let getindex=this.indianPoliticians.findIndex(obj => (obj.id===update.id))
    this.indianPoliticians[getindex]=update
  }

  ondelete(id:string){
    let getindex=this.indianPoliticians.findIndex(t => (t.id===id))
    this.indianPoliticians.splice(getindex, 1)
  }

}
