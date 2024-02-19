import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/app/core/models/Residence';
import { Apartement } from 'src/app/core/models/Apartement';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  urlResidence:string="http://localhost:3000/residences";
  urlAppartment:string="http://localhost:3000/apartments"
  constructor(private httpClient:HttpClient) { }
  getAllResidences():Observable<Residence[]>{
    return this.httpClient.get<Residence[]>(this.urlResidence)

  }
  getResidenceById(id:number):Observable<Residence>{
    return this.httpClient.get<Residence>(this.urlResidence+"/"+id)
  }
  addResidence(residence:Residence):Observable<Residence>{
    return this.httpClient.post<Residence>(this.urlResidence,residence)
  }
  updateResidence(residence:Residence):Observable<Residence>{
    return this.httpClient.put<Residence>(this.urlResidence+"/"+residence.id,residence)
  }
  deleteResidence(id:number):Observable<Residence>{
    return this.httpClient.delete<Residence>(this.urlResidence+"/"+id)
  }
//CRUD Residence en haut terminé

  getAppartmentById(id:number):Observable<Apartement>{
    return this.httpClient.get<Apartement>(this.urlAppartment+"/"+id)
  }
  getAllAppartments():Observable<Apartement[]>{
    return this.httpClient.get<Apartement[]>(this.urlAppartment)
  }
}
