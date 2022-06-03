import { Component, OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';
import { ArticlesService } from '../articles.service';

interface Article {
  id_article:string
  titre:string
  contenu:string
  creation:string
  id:string
}


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  articles: Article[]
  articleU: Article[]

  id:string

  constructor(private articleService: ArticlesService) {
    this.articles = []
    this.articleU = []
    this.id = ""

  }
  ngOnInit(): void {
    let that = this
    this.articleService.afficheAll().subscribe({
      next(ret) {
        ret.forEach((article:Article) => {
          that.articles.push(article)
          console.log(article.id_article) 
        });
        console.log(ret)
      }
    })
  }
  // Modification(id:string) {
  //   let that = this
  //   console.log(this.id)
  //   console.log("jsfsdfjkdsfjkldsfjkldsflkj")

  //   this.articleService.afficheOne(this.id).subscribe({
  //     next(ret) {
  //       ret.forEach((article:Article) => {
  //         console.log(that.id)
  //         if(that.id == article.id_article)
  //         {
  //           console.log("bahahahaha")
  //           console.log(article)
  //           console.log(article.id_article)
  //           console.log(that.id)
  //           that.articleU.push(article)
  //         }


  //       });
  //     }
  //   })
  // }

}

