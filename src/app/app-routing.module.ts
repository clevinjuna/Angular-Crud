import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectFromComponent } from './connect-from/connect-from.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleUniteComponent } from './article-unite/article-unite.component';
import { UtilisateurUniteComponent } from './utilisateur-unite/utilisateur-unite.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { AjoutArticlesComponent } from './ajout-articles/ajout-articles.component';
import { ConnectGuard } from './connect.guard';

const routes: Routes = [
  { path: "", component: ConnectFromComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "articles", component: ArticlesComponent, canActivate:[ConnectGuard] },
  { path: "utilisateurs", component: UtilisateursComponent, canActivate:[ConnectGuard] },
  { path: "ajoutArticles", component: AjoutArticlesComponent, canActivate:[ConnectGuard] },
  { path: "articles/:id", component: ArticleUniteComponent, canActivate:[ConnectGuard] },
  { path: "utilisateurs/:id", component: UtilisateurUniteComponent, canActivate:[ConnectGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
