import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  constructor(private http: HttpClient) { }

  private cities: any

  getCities(wordToMatch) {
    let url = 'http://localhost:3000/citysearch/?name=' + wordToMatch;
    return this.http
    .get(url)
  }
}  
