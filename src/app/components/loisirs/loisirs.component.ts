import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-loisirs',
  templateUrl: './loisirs.component.html',
  styleUrls: ['./loisirs.component.css']
})
export class LoisirsComponent implements OnInit {
  articles: Article[];
  isLoading: boolean;

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.isLoading=true;
    return this.articleService.getByCategory("loisir").subscribe((data : Article[])=>{
      this.articles = data;
      this.isLoading = false;
    });
  }
  

}
