import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:8000/api/peliculas';

@Injectable({ providedIn: 'root' })
export class PeliculaService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> { return this.http.get(API); }
  get(id: any) { return this.http.get(API + '/' + id); }
  create(data: any) { return this.http.post(API, data); }
  update(id: any, data: any) { return this.http.put(API + '/' + id, data); }
  delete(id: any) { return this.http.delete(API + '/' + id); }
}
