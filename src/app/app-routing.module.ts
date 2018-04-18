import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SumListComponent }      from './sum-list/sum-list.component';
import { ShowArticleComponent } from './show-article/show-article.component';

import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/sum-list', pathMatch: 'full' },
  { path: 'sum-list',component: SumListComponent },
  {
      path: 'show-article/:id',    // http://localhost:4200/show-article
      component: ShowArticleComponent
  },
  {
    path: 'edit/:id',    // http://localhost:4200/edit
    canActivate: [AuthGuardService],
    component: EditComponent
  },
  {
    path: 'login',    // http://localhost:4200/login
    component: LoginComponent
  },
  {
    path: 'admin',    // http://localhost:4200/admin
    canActivate: [AuthGuardService],
    component: AdminComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}