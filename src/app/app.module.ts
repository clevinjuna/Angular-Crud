import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoncomposantComponent } from './moncomposant/moncomposant.component';
import { Moncomposant2Component } from './moncomposant2/moncomposant2.component';
import { TodoComponent } from './todo/todo.component';
import { BtnRougeDirective } from './btn-rouge.directive';
import { TodoLigComponent } from './todo-lig/todo-lig.component';
import { ConnectFromComponent } from './connect-from/connect-from.component';
import { LimitPipePipe } from './limit-pipe.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleUniteComponent } from './article-unite/article-unite.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { AjoutArticlesComponent } from './ajout-articles/ajout-articles.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { AjoutCommentaireComponent } from './ajout-commentaire/ajout-commentaire.component';
import { UtilisateurUniteComponent } from './utilisateur-unite/utilisateur-unite.component';

@NgModule({
  declarations: [
    AppComponent,
    MoncomposantComponent,
    Moncomposant2Component,
    TodoComponent,
    BtnRougeDirective,
    TodoLigComponent,
    ConnectFromComponent,
    LimitPipePipe,
    HeaderComponent,
    FooterComponent,
    InscriptionComponent,
    ArticlesComponent,
    ArticleUniteComponent,
    UtilisateursComponent,
    AjoutArticlesComponent,
    CommentairesComponent,
    AjoutCommentaireComponent,
    UtilisateurUniteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
