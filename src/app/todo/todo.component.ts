import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taches: string[]
  tacheEnCour = ""
  paire: boolean
  retApi: any
  constructor(private testService: TestServiceService) {
    this.taches = ["promener le chien", "faire les courses"]
    this.paire = true
  }

  ngOnInit(): void {
  }
  ajoutTache() {
    this.taches.push(this.tacheEnCour)
    this.tacheEnCour = ""
  }
  getPaire() {
    this.paire = !this.paire
    return this.paire
  }
  getPseudo(): string {
    return this.testService.getPseudo()
  }
  addNum() {
    this.testService.ajoutNum(5)
  }
  getPokeApi() {
    this.testService.getPokeApi().subscribe(val => this.retApi = val)
  }
}
