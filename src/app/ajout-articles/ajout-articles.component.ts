import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-ajout-articles',
  templateUrl: './ajout-articles.component.html',
  styleUrls: ['./ajout-articles.component.css']
})
export class AjoutArticlesComponent implements OnInit {
  today = new Date();
  now = this.today.toLocaleString();
  date_creation = this.now;
  id = 12

  AjoutForm: FormGroup
  constructor(private formBuilder: FormBuilder, private articlesService: ArticlesService) {
    this.AjoutForm = formBuilder.group({
      
      titre: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        contenu: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        date_creation: this.date_creation,
        id : this.id

      })
   }

  ngOnInit(): void {
    
  }

  ngAjout() {
    if (this.AjoutForm.valid) {
      this.articlesService.ajout(this.AjoutForm.value)
        .subscribe(data => {
          console.log(data)
        })      
    // , this.SignForm.value.login, this.SignForm.value.pass,  this.SignForm.value.avatar
    }
    else {
      alert('il y a une erreur dans le formulaire')
    }
  }

}
