import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-vie-locale',
  templateUrl: './vie-locale.component.html',
  styleUrls: ['./vie-locale.component.css']
})
export class VieLocaleComponent implements OnInit {
  articles: Article[];
  isLoading: boolean;

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.isLoading=true;
    return this.articleService.getByCategory("vie-locale").subscribe((data : Article[])=>{
      this.articles = data;
      this.isLoading = false;
    });
  }

}
