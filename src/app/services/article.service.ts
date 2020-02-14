import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles : Article[];
  apiUrl = "http://localhost:3000/article";

  constructor(private http : HttpClient) {
    this.articles = [];
    
   }
   handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }
 
   getAllArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl)
    .pipe(
      retry(1),
      catchError(this.handleError)
      );
   }

   getArticlesById(id :number) : Observable <Article>{
    return this.http.get<Article>(this.apiUrl+'/'+id)
    .pipe
    (retry(1),
    catchError(this.handleError));

   }
   add(article : Article) : Observable<Article>{
     article.dateCreated = new Date();
    return this.http.post<Article>(this.apiUrl,article).pipe(
      catchError(this.handleError)
      );

   }
  
   edit(articleEdit: Article){
     
     this.articles.filter(article => article.id === articleEdit.id)[0]=articleEdit;

   }
   deleteArticle(articleSupp : Article):Article[] {
     this.articles = this.articles.filter(article => article !== articleSupp);
     return this.articles;
   }
   getByCategory(category) : Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl+'?category='+category)
    .pipe
    (retry(1),
    catchError(this.handleError));
   }
}
