import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contect } from './contect';

@Injectable({
  providedIn: 'root'
})
export class ContectService {

  basepath:string="http://localhost:9090/contect";

  constructor(private http:HttpClient) { }

  getallcontact():Observable<Contect[]>{
    return this.http.get<Contect[]>(`${this.basepath}/getall`);
  }

savephonebook(contect:Contect):Observable<any>{
  return this.http.post(`${this.basepath}/save`,contect,{responseType:'text'});
}

  deletecontect(id:number):Observable<any>{
    return this.http.delete(`${this.basepath}/remove/${id}`,{responseType:'text'});
  }

  getonerecord(id:number):Observable<Contect>{
    return this.http.get<Contect>(`${this.basepath}/getone/${id}`);
  }

  modifyrecord(id:number,contects:Contect):Observable<any>{
    return this.http.put(`${this.basepath}/modify/${id}`,contects,{responseType:'text'})
  }
}
