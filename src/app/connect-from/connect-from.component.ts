import { Component, Injectable, OnInit, Query } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { UserService } from '../user.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Component({
  selector: 'app-connect-from',
  templateUrl: './connect-from.component.html',
  styleUrls: ['./connect-from.component.css']
})

@Injectable({
  providedIn: 'root'
  })
export class ConnectFromComponent implements OnInit {

  connectForm: FormGroup
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.connectForm = formBuilder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ])
    })
   }


ngOnInit(): void {
}
signOut(): void {
  window.sessionStorage.clear();
}

ngConnexion() {

  if (this.connectForm.valid) {
    console.log(this.connectForm.value)
    let that = this
    this.userService.connexion(this.connectForm.value)
    
      .subscribe({
        next(ret) {
          localStorage['token'] = ret.token
          localStorage['userId'] = ret.id
          console.log(localStorage['token'])
          that.router.navigate(['/articles'])
          
          // let connexion = document.getElementById('#connexion')
          // let inscription = document.getElementById('#connexion')
          // if (connexion)
          // connexion.style.visibility = "hidden"
          // if (inscription)
          // inscription.style.visibility = "hidden"
        },
          error(err) {
            alert(err);
          }
          })
      }      
  else {
    alert('il y a une erreur dans le formulaire')
  }
}
}