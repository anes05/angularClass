import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './core/residence/residence.component';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppartementComponent } from './appartement/appartement.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"", redirectTo:"residence", pathMatch:"full" },
  {path:"residence", component:ResidenceComponent, children:[
    {path: "details/:id", component:DetailsComponent},
  ]},
     // just like the @PathVariable in Spring boot:(id est le nom du parametre)fs
  {path:"test", component:TestComponent,children:[
    {path:"apartment", component:AppartementComponent},
  ]},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
