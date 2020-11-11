import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../employees/employee';

@Injectable()
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private _url: string = '/assets/Data/Employees.json';

getEmployees():Observable<IEmployee[]>
{
  return this.http.get<IEmployee[]>(this._url);
}

}
