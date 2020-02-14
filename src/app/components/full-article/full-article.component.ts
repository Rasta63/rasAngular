import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/model/article';
import {faCog} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {
  article : Article;
  faCog = faCog;
  isLoading: boolean;
  constructor(private route:ActivatedRoute, private articleService : ArticleService,private router : Router) { }

  ngOnInit() {
    this.isLoading = true;
    return this.articleService.getArticlesById(+this.route.snapshot.paramMap.get('id')).subscribe((data : Article)=>{
      this.article = data;
      this.isLoading = false;
    });
  }
  redirectHome(){
    this.router.navigate(["/home"]);
  }

}
