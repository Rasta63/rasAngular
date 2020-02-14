import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ALaUneComponent } from './components/a-la-une/a-la-une.component';
import { VieLocaleComponent } from './components/vie-locale/vie-locale.component';
import { SportComponent } from './components/sport/sport.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';
import { EconomieComponent } from './components/economie/economie.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';


const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: DashboardComponent},
{ path: 'a-la-une', component: ALaUneComponent },
{ path: 'vie-locale', component: VieLocaleComponent },
{ path: 'sport', component: SportComponent },
{ path: 'loisirs', component: LoisirsComponent },
{ path: 'economie', component: EconomieComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'admin/article/add', component: AddArticleComponent },
{ path: 'admin/article/edit/:id', component: EditArticleComponent },
{ path: 'article/:id', component: FullArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
