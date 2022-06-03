import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommentairesService } from '../commentaires.service';
interface Commentaire {
  contenu: string,
  id?: number,
  idArticle?: number,
  idUser?: number,
  idArt?: number,
}

@Component({
  selector: 'app-ajout-commentaire',
  templateUrl: './ajout-commentaire.component.html',
  styleUrls: ['./ajout-commentaire.component.css']
})
export class AjoutCommentaireComponent implements OnInit {
  commentaireAddForm: FormGroup;
  @Input() idArticle: string ='-1';

  constructor(private formBuilder:FormBuilder, private UserService:UserService, private router: Router, private CommentairesService:CommentairesService ) {
    this.commentaireAddForm = this.formBuilder.group({
      contenu: "" as string
    })
   }
   validFormAddCommentaire() {
    console.log(this.commentaireAddForm.value);
    let commentaireInfo: Commentaire = {
      contenu: this.commentaireAddForm.value.contenu,
      idArt: parseInt(this.idArticle)
      };
    let that = this;
    this.CommentairesService.addCommentaire(commentaireInfo).subscribe({
      next(res) {
        that.router.navigate(['/']).then(() => {
          that.router.navigate(['articles/' + res.id_article]);
        });
      }
    });
  }
  ngOnInit(): void {
  }

}

   

  

  