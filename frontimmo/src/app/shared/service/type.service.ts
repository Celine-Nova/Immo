import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';
import { Type } from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
    constructor(private http: HttpClient, private errorService: ErrorService) {
    }
    
    getTypes(): Observable<Type[]>{
      return this.http.get<any>('http://localhost:3000/types/')
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getTypes', []))
        );
      } 
    getType(id:number): Observable<Type>{
    return this.http.get<any>('http://localhost:3000/types/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getType', []))
      );
    }
     // POST :  Add a Type
  addType(type: Type): Observable<Type> {
    return this.http.post<Type>('http://localhost:3000/types/', type, {responseType: 'json'})
    .pipe(
      tap((data: Type) => console.log(data.name)),
      catchError(this.errorService.handleError<Type>('addType'))
      );
  }

  // // PUT :  Edit a Type
  // editType(type: Type, id: number): Observable<Type> {
  //   return this.http.put<Type>('http://localhost:3000/types/edit' + id, type, {responseType: 'json'})
  //   .pipe(
  //     tap((data: Type) => console.log(data)),
  //     catchError(this.errorService.handleError<Type>('deleteType'))
  //     );
  // }

  //     /** DELETE: delete one Type */
  //     deleteCategory(id: string): Observable<Type> {
  //       const url ='http://localhost:3000/types/delete' + id;
  //       return this.http.delete<any>(url)
  //         .pipe(
  //           tap(data => data),
  //           catchError(this.errorService.handleError('deleteType'))
  //         );
  //     }
  }
  