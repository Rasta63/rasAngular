import { Component, OnInit, Input, Output } from '@angular/core';
import { Article } from 'src/app/model/article';
import { EventEmitter } from '@angular/core';
import { RandomColorService } from 'src/app/services/random-color.service';



@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  @Input() articl : Article; 
  @Output() votEmitter : EventEmitter <boolean> = new EventEmitter<boolean>();
  nbVote=0;
  color : string;
  
  
  constructor(private colorService : RandomColorService) {
    
   }
   vote(){
    this.votEmitter.emit(true);
    this.nbVote++;
   }

  ngOnInit() {
    setInterval(() => {
      this.color = this.colorService.changeColor();
      }, 5000);

}
}