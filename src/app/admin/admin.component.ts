import { Component, OnInit } from '@angular/core';

import { Article } from '../../domain/article';
import { ArticleService} from '../service/article.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticleService]
})
export class AdminComponent implements OnInit {

  constructor(private articleService: ArticleService) { } //增加了heroService
  
    articles : Article[]; //原来是：heroes = HEROES;
    selectedArticle : Article;
    title: string;
  
    ngOnInit() {
      this.articleService.getArticles().then(articles => this.articles = articles);
    }

    deleteArticle(article:Article) :void{
      this.articleService.deleteArticleById(article.id).then(
        () => {
          this.articles = this.articles.filter(h => h !== article);
          if (this.selectedArticle === article) { this.selectedArticle = null; }
        }
      );
      alert("删除成功~");
    }


    editArticle(article:Article) :void{
      this.articleService.updateArticle(article).then(
        () => {
          this.articles = this.articles.filter(h => h !== article);
          if (this.selectedArticle === article) { this.selectedArticle = null; }
        }
      )
    }
    
    addArticle(title: string) :void{
      this.articleService.createArticleByTitle(title).then(
        article => {
          this.articles.push(article);
          this.selectedArticle = null;
        }
      )
      alert("添加成功，文章标题为："+title+"\n请点击编辑添加内容~");
    }


}
