import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './core/residence/residence.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppartementComponent } from './appartement/appartement.component';
import { DetailsComponent } from './details/details.component';
import{HttpClientModule} from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    TestComponent,
    NotFoundComponent,
    AppartementComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
