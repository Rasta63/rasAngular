import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import {faCog} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-economie',
  templateUrl: './economie.component.html',
  styleUrls: ['./economie.component.css']
})
export class EconomieComponent implements OnInit {
  articles: Article[];
  isLoading : boolean;
  faCog = faCog;

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.isLoading=true;
    return this.articleService.getByCategory("economie").subscribe((data : Article[])=>{
      this.articles = data;
      this.isLoading = false;
    });
  }

}
