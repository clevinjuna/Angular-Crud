import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { CommentairesService } from '../commentaires.service';
import { UserService } from '../user.service';
interface Article {
  id_article:string
  titre:string
  contenu:string
  creation:string
  id:string
}
interface User {
  id:string
  pseudo:string
  email:string
  password:string
  avatar:string
}
interface Commentaires {
  contenu: string,
  id: number,
  idArticle: number,
  idUser: number,
  idArt: number
}
@Component({
  selector: 'app-utilisateur-unite',
  templateUrl: './utilisateur-unite.component.html',
  styleUrls: ['./utilisateur-unite.component.css']
})
export class UtilisateurUniteComponent implements OnInit {
  visibilityUser = "hidden"
  visibilityUserAth = "hidden"
  UserId = localStorage['userId']


  commentaires: Array<Commentaires> = []
  idAcharger: number = 0;
  user: User = {
    id: '',
    pseudo: '',
    email: '',
    password: '',
    avatar: ''
  }
  ModifUserForm: FormGroup
  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute, private ArticlesService:ArticlesService, private UserService:UserService, private CommentairesService:CommentairesService, private router:Router) { 
    this.ModifUserForm = formBuilder.group({
      pseudo: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        email: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        avatar: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ])

  })
}
  idArticle(idArticle: any): number | undefined {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
   
    let that = this
    this.route.params.subscribe({
      next(val) {
        that.idAcharger = parseInt(val["id"])
        console.log(that.idAcharger)
      }
    });
    this.UserService.afficheOne(this.idAcharger).subscribe({
      next(user) {
        console.log(user);
        that.user = user;
    
        if(that.UserId == that.user.id) {
          that.visibilityUserAth = "visible"
    
        }

      },
      error(err){
        console.log(err);
      }
    });
   
  }
  ngSupr(id:string) {
    let that = this
    this.UserService.delete(parseInt(id)).subscribe({
      next() {
        console.log("bien supr id" + that.idAcharger);
      },
      error(err){
        console.log(err);
        alert(err);
      }
    });
}
ngModif() {
  this.visibilityUser = "visible"; 
}
ngEnvoiModifUser(id:string) {
  if (this.ModifUserForm.valid) {
    console.log(this.ModifUserForm)
    console.log(id)
    this.UserService.modif(this.ModifUserForm.value, parseInt(id))
      .subscribe(data => {
        console.log(data)
        document.location.reload();
        
      }) 
           
  // , this.SignForm.value.login, this.SignForm.value.pass,  this.SignForm.value.avatar
  }
}
}
