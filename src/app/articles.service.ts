import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

interface Article {
  titre:""
  contenu:""
  date_creation:""
  id:""
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + localStorage['token']
    })
  };
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
    `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
    error.error.mess || error.error);
    }

  constructor(private http: HttpClient) { }
    
  getAll(): Observable<Article> {
    return this.http.get<Article>("https://reseau.jdedev.fr/api/article")
  }
  afficheAll(): Observable<any>{
    return this.http.get("https://reseau.jdedev.fr/api/article", this.httpOptions).pipe(
      catchError(this.handleError)
      )
  }
  afficheOne(id:number): Observable<any>{
    console.log(id)
    return this.http.get("https://reseau.jdedev.fr/api/article/" + id, this.httpOptions).pipe(
      catchError(this.handleError)
      )
  }
  ajout(article:Article): Observable<any>{
      return this.http.post<any>("https://reseau.jdedev.fr/api/article/", article, this.httpOptions).pipe(
        catchError(this.handleError)
        )  
   }
   modif(article:Article, id:number): Observable<any>{
    return this.http.put<any>("https://reseau.jdedev.fr/api/article/" + id, article, this.httpOptions).pipe(
      catchError(this.handleError)
      )  
 }
   delete(id:number): Observable<any>{
    console.log(id)
    return this.http.delete("https://reseau.jdedev.fr/api/article/" + id, this.httpOptions).pipe(
      catchError(this.handleError)
      )
      }
    
  }

