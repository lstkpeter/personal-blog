import { Component, OnInit, Input, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Article } from '../../domain/article';
import { ArticleService} from '../service/article.service';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css'],
  providers: [ArticleService]
})
export class ShowArticleComponent implements OnInit {
  @Input() article: Article;

  html:SafeResourceUrl;
  
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) {}

  articles : Article[]; //原来是：heroes = HEROES;
  selectedArticle : Article;

  ngOnInit() {
    this.getArticle();
    setTimeout(()=>this.html=this.sanitizer.bypassSecurityTrustHtml(this.returnContent(this.getArticle())),700);
  }

  getArticle(): Article {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(id)
      .then(article => this.article = article);

      return this.article;
  }

  //返回article里面的content,返回值是一个string
  //为了设置初始值
  returnContent(article:Article): string{
    return article.content;
  }
  goBack(): void {
    this.location.back();
  }
}
