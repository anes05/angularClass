import { Component } from '@angular/core';
import { Apartement } from '../models/Apartement';
import { Residence } from '../models/Residence';
import { Router } from '@angular/router';
import { ResidenceService } from 'src/app/service/residenceService/residence.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
//injection du Router dans le consutructeur. 
constructor(private _router:Router,
            private residenceService:ResidenceService          
  ){}

  //initialisation de la liste a vide 
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
  listResidences!:Residence[];

   listApartments!:Apartement[]
   /* {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
   ];*/

   goto(){
    this._router.navigateByUrl("test");
   }
   deleteResidence(id:number){
    this.residenceService.deleteResidence(id).subscribe(res=>
      this.residenceService.getAllResidences().subscribe(
        res=>this.listResidences=res)
    );
   }
   ngOnInit(){
    this.residenceService.getAllResidences().subscribe(
      res=>this.listResidences=res);
        this.residenceService.getAllAppartments().subscribe(
        res=>this.listApartments=res);
      
   }

}
