import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(private http: HttpClient) { }

  fetchYelpApi(city, state, price): Observable<any> {
    return this.http.get(
      `http://localhost:3000/yelpapi/${city}/${state}/${price}`)
  }
}
