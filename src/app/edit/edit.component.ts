import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from '../../domain/article';
import { ArticleService} from '../service/article.service';

import { UEditorModule } from 'ngx-ueditor';
import { UEditorComponent } from 'ngx-ueditor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ArticleService]
})
export class EditComponent implements OnInit {
@Input() article: Article;
@ViewChild('full') full: UEditorComponent;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location,
    private el: ElementRef
  ) {}

  articles : Article[]; //原来是：heroes = HEROES;
  selectedArticle : Article;

  ngOnInit() {
    this.getArticle();
    setTimeout(()=>this.full.Instance.setContent(this.returnContent(this.getArticle())),700);
  }
  
  //返回路由对应的article
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

  updateContent(article:Article){
    this.articleService.updateArticle(article).then(
      //() => {
      //  this.articles = this.articles.filter(h => h !== article);
      //  if (this.selectedArticle === article) { this.selectedArticle = null; }
      //}
    )
  }

  getContent() {
    // 通过 `this.full.Instance` 访问ueditor实例对象
    this.getArticle().content=this.full.Instance.getContent();
    this.updateContent(this.getArticle());
    alert("修改成功！");
  }



 editArticle(article:Article) :void{
  this.articleService.updateArticle(article).then(
    () => {
      this.articles = this.articles.filter(h => h !== article);
      if (this.selectedArticle === article) { this.selectedArticle = null; }
    }
  )
 }
    

}