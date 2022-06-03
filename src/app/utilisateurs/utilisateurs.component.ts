import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

interface Utilisateurs {
  pseudo:""
  password:""
  email:""
  avatar:"",
  id:""
}

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  utilisateurs: Utilisateurs[]
  utilisateurU: Utilisateurs[]
  constructor( private userService: UserService) {
    this.utilisateurs = []
    this.utilisateurU = []

   }

  ngOnInit(): void {
    let that = this
    this.userService.afficheAllUser().subscribe({
      next(ret) {
        ret.forEach((utilisateurs:Utilisateurs) => {
          that.utilisateurs.push(utilisateurs)
          console.log(utilisateurs)
          console.log(utilisateurs.pseudo) 
        });
        console.log(ret)
      }
    })
  }

}
