import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/model/article';
import {faCog} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-a-la-une',
  templateUrl: './a-la-une.component.html',
  styleUrls: ['./a-la-une.component.css']
})
export class ALaUneComponent implements OnInit {
  articles : Article[];
  isLoading: boolean;
  faCog=faCog;
  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.isLoading=true;
    return this.articleService.getByCategory("a-la-une").subscribe((data : Article[])=>{
      this.articles = data;
      this.isLoading = false;
    });
  }

}
