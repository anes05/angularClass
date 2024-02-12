import { Component } from '@angular/core';
import { Apartement } from '../models/Apartement';
import { Residence } from '../models/Residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  list:Apartement[]=[];
show(id:number) {
  this.list=[];
  for(let a of this.listApartments){
    if(a.residence.id == id){
      this.list.push(a)
    }
  }
  console.log(this.list);

}

showAge(r:Residence){
  console.log(r.age);
}
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/OIP.jpeg", age:18},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", age:20},
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", age:25},
     {id:4,"name": "El Anber","address":"Manzah 5", "image":"../../assets/images/R4.jpg", age:30}
   ];

   listApartments:Apartement[]=[
    {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
   ];

}
