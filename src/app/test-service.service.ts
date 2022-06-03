import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  private pseudoUser: string
  private tabNum: number
  constructor(private http: HttpClient) {
    this.pseudoUser = ""
    this.tabNum = 0
  }
  setPseudo(pseudo: string) {
    this.pseudoUser = pseudo
  }
  getPseudo(): string {
    return this.pseudoUser
  }
  getSubTabNum() {
    return of(this.tabNum, 4, 5)
  }
  getTabNum() {
    return this.tabNum
  }
  ajoutNum(n: number) {
    this.tabNum = n
  }
  getPokeApi() {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto")
  }
}
