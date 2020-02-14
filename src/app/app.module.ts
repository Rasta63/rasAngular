import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { FirstCharPipePipe } from './pipes/first-char-pipe.pipe';
import { MonthPipe } from './pipes/month.pipe';
import { ALaUneComponent } from './components/a-la-une/a-la-une.component';
import { VieLocaleComponent } from './components/vie-locale/vie-locale.component';
import { SportComponent } from './components/sport/sport.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';
import { EconomieComponent } from './components/economie/economie.component';
import { AdminComponent } from './components/admin/admin.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import {FormsModule} from '@angular/forms';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ToastrModule } from 'ngx-toastr';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    DetailArticleComponent,
    FirstCharPipePipe,
    MonthPipe,
    ALaUneComponent,
    VieLocaleComponent,
    SportComponent,
    LoisirsComponent,
    EconomieComponent,
    AdminComponent,
    FullArticleComponent,
    AddArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
