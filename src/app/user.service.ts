import { Injectable } from '@angular/core';
import { catchError, throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

interface User {
  pseudo:""
  password:""
  email:""
  avatar:""
}

interface UserCo {
  email:""
  password:""
}



@Injectable({
  providedIn: 'root'
})

export class UserService {

  postId = "4564"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  httpOptionsGet = {
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
  afficheOne(id:number): Observable<any>{
    console.log(id)
    return this.http.get("https://reseau.jdedev.fr/api/user/" + id, this.httpOptionsGet).pipe(
      catchError(this.handleError)
      )
  }
  delete(id:number): Observable<any>{
    console.log(id)
    return this.http.delete("https://reseau.jdedev.fr/api/user/" + id, this.httpOptionsGet).pipe(
      catchError(this.handleError)
      )
      }

  getPeople(): Observable<User> {
    return this.http.get<User>("https://reseau.jdedev.fr/api/user")
  }
  getPeopleCo(): Observable<UserCo> {
    return this.http.get<UserCo>("https://reseau.jdedev.fr/api/user")
  }
  
  afficheAllUser(): Observable<any>{
    console.log(this.http.get("https://reseau.jdedev.fr/api/user", this.httpOptionsGet))
    return this.http.get("https://reseau.jdedev.fr/api/user", this.httpOptionsGet).pipe(
      catchError(this.handleError)
      )
  }

  inscription(sign: User): Observable<any>{
    return this.http.post<any>("https://reseau.jdedev.fr/api/user/", sign, this.httpOptions).pipe(
      catchError(this.handleError)
      )  
 }
 deco(){  
    window.location.reload();
    window.location.pathname = "/";

 }
 connexion(log: UserCo): Observable<any>{
  return this.http.post<any>("https://reseau.jdedev.fr/api/user/connect", log, this.httpOptions).pipe(
    catchError(this.handleError)
    )
    }
  isConnected():boolean {
    console.log(localStorage['token'])
    if(localStorage['token'] == ""){
      return false;
    }
    else {
      return true;
    }
  }
  modif(user:User, id:number): Observable<any>{
    return this.http.put<any>("https://reseau.jdedev.fr/api/user/" + id, user, this.httpOptionsGet).pipe(
      catchError(this.handleError)
      )  
 }
}
  //   .pipe(
  //   catchError(this.handleError)
  // ) 
  // }

