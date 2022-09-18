import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getTableData() {
    return this.http.get('https://fakerapi.it/api/v1/users?_quantity=100&_gender=male');
  }
}
