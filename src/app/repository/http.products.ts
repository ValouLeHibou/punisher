import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpProducts {
  constructor(private http: HttpClient) {
  }

  fetchList(): any {
    return this.http.get('http://localhost:3000/products');
  }
}
