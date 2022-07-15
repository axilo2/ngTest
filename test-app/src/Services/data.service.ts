import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getData = (): void => {
    this.http.get(this.url)
  }
}
