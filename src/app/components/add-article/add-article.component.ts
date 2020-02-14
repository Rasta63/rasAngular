import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  article : Article;
  
  constructor(private articleService : ArticleService, private router : Router,private toastr: ToastrService) { }


  ngOnInit() {
    this.article = new Article();
    
  }

  onSubmit(){
    this.articleService.add(this.article).subscribe(data => {
      this.toastr.success("Votre Article a été bien ajouté!!");
      this.router.navigate(['/admin']);
      });
    
  }

}
