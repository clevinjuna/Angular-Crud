import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { UserService } from '../user.service';
import { CommentairesService } from '../commentaires.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  id_commentaire: number,
  idArticle: number,
  idUser: number,
  idArt: number
}
@Component({
  selector: 'app-article-unite',
  templateUrl: './article-unite.component.html',
  styleUrls: ['./article-unite.component.css']
})
export class ArticleUniteComponent implements OnInit {
  commentaires: Array<Commentaires> = []
  UserId = localStorage['userId']
  visibilityUserAth = "hidden"
  visibilityUserAthCom = "hidden"
  visibility = "hidden"
  visibilityCom = "hidden"
  idAcharger: number = 0;
  auteurCom: Array<User> = [];
  auteurArt: User = {
    id:"-1",
    pseudo: '',
    email: '',
    password: '',
    avatar: '',
  }
  article: Article = {
    titre: '',
    contenu: '',
    id_article: '',
    creation: '',
    id: ''
  }
  ModifForm: FormGroup
  ModifComForm: FormGroup
  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute, private ArticlesService:ArticlesService, private UserService:UserService, private CommentairesService:CommentairesService, private router:Router) {
    this.ModifForm = formBuilder.group({
      titre: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        contenu: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),

      }),
      this.ModifComForm = formBuilder.group({
          contenu: new FormControl("", [
            Validators.required,
            Validators.minLength(3)
          ]),
  
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
    this.ArticlesService.afficheOne(this.idAcharger).subscribe({
      next(art) {
        console.log(art);
        that.article = art;
        
        if(that.UserId == that.article.id) {
          that.visibilityUserAth = "visible"
    
        }


      },
      error(err){
        console.log(err);
      }
    });
    this.CommentairesService.getCommentaires(this.idAcharger).subscribe({
      next(com) {
        console.log(com);
        that.commentaires = com;
        that.UserService.afficheAllUser().subscribe({
          next(autComm) {
            console.log(autComm);
            for (com of that.commentaires){
              let index = autComm.findIndex((auteurComm:User) => auteurComm.id === com.id)
              that.auteurCom.push(autComm[index]);
              console.log(that.UserId)
              console.log(com.id)
              if(that.UserId == com.id) {
                console.log("dedans")
                that.visibilityUserAthCom = "visible"
          
              }
            }
          },
          error(err){
            console.log(err);
          }
        });
      },
      error(err){
        console.log(err);
      }

    });
    
   
  }
  ngSupr() {
    let that = this
    this.ArticlesService.delete(this.idAcharger).subscribe({
      next() {
        console.log("bien supr id" + that.idAcharger);
        that.router.navigate(['/']).then(() => {
          that.router.navigate(['articles/' + that.idAcharger]);
        });
      },
      error(err){
        console.log(err);
        alert(err);
      }
    });
   
  }
  
  ngModif() {
      this.visibility = "visible"; 
  }
  ModifierCommentaire(id:number) {
    this.visibilityCom = "visible"; 
  }
  
  ngEnvoiModif() {
    if (this.ModifForm.valid) {
      this.ArticlesService.modif(this.ModifForm.value, this.idAcharger)
        .subscribe(data => {
          console.log(data)
          document.location.reload();
          
        }) 
             
    // , this.SignForm.value.login, this.SignForm.value.pass,  this.SignForm.value.avatar
    }
   

}
ngEnvoiModifCom(id:number) {
  if (this.ModifComForm.valid) {
    this.CommentairesService.modif(this.ModifComForm.value, id)
      .subscribe(data => {
        console.log(data)
        document.location.reload();
        
      }) 
           
  // , this.SignForm.value.login, this.SignForm.value.pass,  this.SignForm.value.avatar
  }

else {
  alert('il y a une erreur dans le formulaire')
}
}
SupprimerCommentaire(id:number) {
  let that = this
  console.log(id)
  this.CommentairesService.delete(id).subscribe({
    next() {
      console.log("bien supr id" + id);
      that.router.navigate(['/']).then(() => {
        that.router.navigate(['articles/' + that.idAcharger]);
      });
    },
    error(err){
      console.log(err);
      alert(err);
    }
  });
 
}

}

  // articles: Article[]
  // id:string = "12"
  // constructor(private articleService: ArticlesService) { 
  //   this.articles = []

  // }

  // ngOnInit(): void {
  // //   let that = this
  // //   this.articleService.afficheOne(this.id).subscribe({
  // //     next(ret) {
  // //       ret.forEach((article:Article) => {
  // //         that.articles.push(article)
  // //         console.log(article.id_article) 


  // //       });
  // //       console.log(ret)
  // //     }
  // //   })
  // }

