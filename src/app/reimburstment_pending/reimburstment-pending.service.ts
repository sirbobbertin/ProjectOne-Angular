import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimburstment } from '../reimburstment/reimburstment.model';

@Injectable({
  providedIn: 'root'
})
export class ReimburstmentPendingService {

  baseUrl = "http://localhost:4041/api/reimburstments/pending";

  constructor(private http: HttpClient) { }

  getAllReimburstmentService(): Observable<Reimburstment[]>{
    return this.http.get<Reimburstment[]>(this.baseUrl);
  }

  getAllUserReimburstmentService(employeeId: number): Observable<Reimburstment[]>{
    return this.http.get<Reimburstment[]>(this.baseUrl+"/"+employeeId);
  }

  addReimburstService(newReimburst: Reimburstment): Observable<Reimburstment>{
    return this.http.post<Reimburstment>(this.baseUrl, newReimburst);
  }

  removeReimburstService(reimburstId: number): Observable<Reimburstment>{
    return this.http.delete<Reimburstment>(this.baseUrl+"/"+reimburstId);
  }
}
