import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient, private errorService: ErrorService) {
  }
  
  getProperties(): Observable<Property[]>{
    return this.http.get<Property[]>('http://localhost:3000/properties/')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getProperties', []))
      );
    } 
  getProperty(id: number): Observable<Property>{
  return this.http.get<any>('http://localhost:3000/properties/' + id)
  .pipe(
    tap(data => data),
    catchError(this.errorService.handleError('getProperty', []))
    );
  }
}
