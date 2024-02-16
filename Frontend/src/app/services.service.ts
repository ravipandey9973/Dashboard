import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  readonly apiurl = "http://localhost:64404/api";
  getdata() : Observable <any []>
  {
    return this.http.get<any>(this.apiurl+'/Document');
  }
  adddata(val:any)
  {
    return this.http.post(this.apiurl+'/Document',val);
  }
  updatedata(val:any)
  {
    return this.http.put(this.apiurl+'/Documnet',val);
  }
  deletedata(val:any)
  {
    return this.http.delete(this.apiurl+'/Document/'+val);
  }

}
