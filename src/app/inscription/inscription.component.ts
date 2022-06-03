import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})


export class InscriptionComponent implements OnInit {
 
    signForm: FormGroup
    constructor(private formBuilder: FormBuilder, private userService: UserService) {
      this.signForm = formBuilder.group({

        pseudo: new FormControl("", [
            Validators.required,
            Validators.minLength(3)
          ]),
          password: new FormControl("", [
            Validators.required,
            Validators.minLength(3)
          ]),
          email: new FormControl("", [
            Validators.required,
            Validators.minLength(3)
          ]),
          avatar: new FormControl("", [
            Validators.required,
            Validators.minLength(3)
          ]),
        })
     }


  ngOnInit(): void {
  }
  ngInscription() {
    if (this.signForm.valid) {
      this.userService.inscription(this.signForm.value)
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
