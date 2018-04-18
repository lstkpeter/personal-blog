import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SumListComponent } from './sum-list/sum-list.component';
import { IndexIntroComponent } from './index-intro/index-intro.component';
import { IndexClassifyComponent } from './index-classify/index-classify.component';
import { IndexSearchComponent } from './index-search/index-search.component';
import { PageBottomComponent } from './page-bottom/page-bottom.component';
import { ApiService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';
import { ShowArticleComponent } from './show-article/show-article.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CoreModule } from './core/core.module';

import { UEditorModule } from 'ngx-ueditor';//富文本编辑器
import { EditComponent } from './edit/edit.component';//编辑组件



@NgModule({
  declarations: [
    AppComponent,
    SumListComponent,
    IndexIntroComponent,
    IndexClassifyComponent,
    IndexSearchComponent,
    PageBottomComponent,
    ShowArticleComponent,
    NavComponent,
    LoginComponent,
    AdminComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    UEditorModule.forRoot({
      // 指定ueditor.js路径目录
      path: 'assets/ueditor/',
      // 默认全局配置项
      options: {
          themePath: '/assets/ueditor/themes/'
      }
  })
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
