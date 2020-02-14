import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  articles: Article[];
  isLoading: boolean;

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.isLoading=true;
    return this.articleService.getByCategory("sport").subscribe((data : Article[])=>{
      this.articles = data;
      this.isLoading = false;
    });
  }

}
