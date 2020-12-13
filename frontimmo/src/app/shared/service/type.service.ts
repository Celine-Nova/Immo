import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
    constructor(private http: HttpClient, private errorService: ErrorService) {
    }
    
    getTypes(): Observable<any>{
      return this.http.get<any>('http://localhost:3000/types/')
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getTypes', []))
        );
      } 
    getType(id): Observable<any>{
    return this.http.get<any>('http://localhost:3000/types/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getType', []))
      );
    }
  }
  