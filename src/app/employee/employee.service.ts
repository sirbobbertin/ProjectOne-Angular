import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = "http://localhost:4041/accounts/employees";

  constructor(private http: HttpClient) { }

  updateInfoService(updateInfo: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseUrl+"/"+updateInfo.id, updateInfo);
  }

  viewInfoService(employeeId: number): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+"/"+employeeId);
  }
}
