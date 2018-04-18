import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Article } from '../../domain/article';

import { ApiService } from './api.service';

@Injectable()
export class ArticleService {

  private api_url ;
  private headers ;

  constructor(private http: Http, private apiService: ApiService) {
      this.api_url = apiService.getUrl() + '/articles';
      this.headers = apiService.getHeaders();
  }

  getArticles(): Promise<Article[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Article[])
        .catch(this.handleError);
  }
  
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

  getArticleById(id: number): Promise<Article> {
    const url = `${this.api_url}/${id}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Article)
        .catch(this.handleError);
}

//创建文章
createArticle(article: Article): Promise<Article> {
  const url = `${this.api_url}`;
  return this.http
    .post(url, JSON.stringify(article), {headers: this.headers})
    .toPromise()
    .then(res => res.json() as Article)
    .catch(this.handleError);
}



 //按title新建Article
 createArticleByTitle(title: string): Promise<Article> {
  let article = {
    title: title
  }
  const url = `${this.api_url}`;
  return this.http
    .post(url, JSON.stringify(article), {headers: this.headers})
    .toPromise()
    .then(res => res.json() as Article)
    .catch(this.handleError);
}

//修改Article
updateArticle(article: Article): Promise<Article> {
  const url = `${this.api_url}/${article.id}`;
  return this.http
    .put(url, JSON.stringify(article), {headers: this.headers})
    .toPromise()
    .then(res => res.json() as Article)
    .catch(this.handleError);
}

//删除某个Article
deleteArticle(article: Article): Promise<void> {
  const url = `${this.api_url}/${article.id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

//按id删除某个Article
deleteArticleById(id: number): Promise<void> {
  const url = `${this.api_url}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

}
