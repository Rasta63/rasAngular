import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { ToastrService } from 'ngx-toastr';
import {faCog} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article : Article;
  isLoading: boolean;
  faCog = faCog;

  constructor(private router : Router, private route:ActivatedRoute,private articleService : ArticleService, private toaster : ToastrService) { }

  ngOnInit() {
    this.isLoading = true;
    return this.articleService.getArticlesById(+this.route.snapshot.paramMap.get('id')).subscribe((data : Article)=>{
      this.article = data;
      this.isLoading = false;
    });
  }
  onSubmit(){
    this.articleService.edit(this.article).subscribe(data => {
      this.router.navigate(['/admin']);
      this.toaster.success("Votre article a été bien modifié");
      });
    
  }


}
