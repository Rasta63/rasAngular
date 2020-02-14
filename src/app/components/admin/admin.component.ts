import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import {faEdit } from '@fortawesome/free-solid-svg-icons';
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles : Article[];
  faEdit = faEdit;
  faTrash = faTrash;
  isLoading: boolean;
  faCog = faCog;
  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    return this.articleService.getAllArticles().subscribe((data : Article[])=>{
      this.articles = data;
      this.isLoading = false;
    });
  }
  deleteArticle(article){
   this.articles = this.articleService.deleteArticle(article);
  }

}
