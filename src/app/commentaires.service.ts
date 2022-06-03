import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {
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


  constructor(private http:HttpClient) { }


getCommentaires(id:number):Observable<any>{

const headers = new HttpHeaders({
'Content-Type': 'application/json',
'Authorization': "Bearer " + localStorage['token']
})

return this.http.get("https://reseau.jdedev.fr/" + `api/article/${id}/comment` , this.httpOptions);
}
addCommentaire(newCommentaire:any):Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + localStorage['token']
  })
  return this.http.post("https://reseau.jdedev.fr/api/" + "comment", newCommentaire, this.httpOptions);
}
modif(contenu:string, id:number): Observable<any>{
  console.log(contenu)
  console.log(this.http.put<any>("https://reseau.jdedev.fr/api/comment/" + id, contenu, this.httpOptions))
  return this.http.put<any>("https://reseau.jdedev.fr/api/comment/" + id, contenu, this.httpOptions).pipe(
    catchError(this.handleError)
    )  
}
 delete(id:number): Observable<any>{
  console.log(id)
  return this.http.delete("https://reseau.jdedev.fr/api/comment/" + id, this.httpOptions).pipe(
    catchError(this.handleError)
    )
    }
  
}