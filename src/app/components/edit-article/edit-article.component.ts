import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article : Article;

  constructor(private router : Router, private route:ActivatedRoute,private articleService : ArticleService, private toaster : ToastrService) { }

  ngOnInit() {
    this.article = this.articleService.getArticlesById(+this.route.snapshot.paramMap.get('id'));
  }
  onSubmit(){
    this.articleService.edit(this.article);
    this.toaster.success("Votre Article a été bien modifier!!");
    this.router.navigate(["/admin"]);
  }


}
