import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { RandomColorService } from 'src/app/services/random-color.service';
import { ArticleService } from 'src/app/services/article.service';
import {faCog} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  favoriTeam : string;
  classement = ['ASM','MAYOTTE', 'TOULON'];
 
  nbClick =0;
  color1 : string;
  color2 : string;
  articles : Article[];
  isLoading : boolean;
  faCog = faCog;

  constructor(private colorClignote : RandomColorService, private articleService : ArticleService) {
    
   }
  
  ngOnInit() {
     this.color1 = this.colorClignote.changeColor();
      this.color2 = this.colorClignote.changeColor();
      this.isLoading = true;
      return this.articleService.getAllArticles().subscribe((data : Article[])=>{
        this.articles = data;
        this.isLoading = false;
      });
  }
  vot(event){
    this.nbClick++;
  }
  changeBtnClicked(){
    this.favoriTeam='MAYOTTE';
  }
  
  

}
