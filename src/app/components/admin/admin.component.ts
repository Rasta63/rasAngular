import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import {faEdit } from '@fortawesome/free-solid-svg-icons';
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';


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
  constructor(private articleService : ArticleService , private toastr : ToastrService) { }

  ngOnInit() {
    this.isLoading = true;
    return this.articleService.getAllArticles().subscribe((data : Article[])=>{
      this.articles = data;
      this.isLoading = false;
      
    });
  }
  deleteArticle(id : number){
    this.isLoading = true;
   return this.articleService.deleteArticle(id).subscribe(then =>{
     console.log(then);
     this.articleService.getAllArticles().subscribe((data: Article[])=> {
       this.articles = data;
       this.isLoading = false;
       this.toastr.success("Votre Article a été bien supprimé")
     });
    });
  }

}
