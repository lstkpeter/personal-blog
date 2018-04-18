import { Component, OnInit } from '@angular/core';

import { Article } from '../../domain/article';
import { ArticleService} from '../service/article.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [ArticleService]
})
export class NavComponent implements OnInit {

  userId: number;

  private ICON = require("./assets/ico_list.gif");

  constructor() { }

  ngOnInit(){
    const divLogin = document.getElementById('Login');
    const divLogout = document.getElementById('Logout');
    this.userId = -1;
    if(localStorage.getItem('userId') !== null){
     //已登录
     divLogin.style.display = 'none';

     this.userId = <number><any>localStorage.getItem('userId');

    }
    else{
      //未登录
      divLogout.style.display = 'none';
    }
  }

  logout() {
    localStorage.removeItem('userId');
    this.userId = -1;
    location.reload();
  }
  
}
