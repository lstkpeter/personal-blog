import { Component, OnInit } from '@angular/core';

import { Article } from '../../domain/article';
import { ArticleService} from '../service/article.service';

@Component({
  selector: 'app-sum-list',
  templateUrl: './sum-list.component.html',
  styleUrls: ['./sum-list.component.css'],
  providers: [ArticleService]
})
export class SumListComponent implements OnInit {

  constructor(private articleService: ArticleService) { } //增加了heroService
  
    articles : Article[]; //原来是：heroes = HEROES;
    selectedArticle : Article;
  
    ngOnInit() {
      this.articleService.getArticles().then(articles => this.articles = articles);
    }

}
