import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ITab } from 'src/app/Models/table';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: ITab[] = [];

  constructor(private http: HttpClient) { }

  getData(): Observable<ITab[]> {
    return this.http.get<ITab[]>("https://jsonplaceholder.typicode.com/posts");
  }


}
