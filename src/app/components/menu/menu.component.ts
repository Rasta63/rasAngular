import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logEvent(menuItem : string){
    //console.log(`L'utilisateur a cliqué sur ${menuItem}.`);
    
  }

}

