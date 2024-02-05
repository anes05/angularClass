import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './core/residence/residence.component';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppartementComponent } from './appartement/appartement.component';

const routes: Routes = [
  {path:"", redirectTo:"residence", pathMatch:"full" },
  {path:"residence", component:ResidenceComponent},
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
