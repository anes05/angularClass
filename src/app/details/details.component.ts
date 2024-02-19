import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id!:number;
  //oinjecter le service avtivated Route dans ce service sous le nom activatedRoute
  constructor(private activatedRoute:ActivatedRoute){
  }
  //methode hook: elle se declanche automatiquement
  //intialiser le composant
  ngOnInit(){
    console.log("je suis ngOnInit");
    //console.log(this.activatedRoute.snapshot.params['id']);
    // la methode en dessus donne seulement le premier parametres puis pas de changement.
    //par contre la fonction ci dessous apres chaue changement il y 'aura aussi un changement dans le clg 
    console.log(this.activatedRoute.paramMap.subscribe(res=>{
        console.log(res.get('id'));
        this.id=Number(res.get('id'));
        console.log(this.id);
    }));
  }
}
