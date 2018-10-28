import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePage' },
  { path: 'Education', loadChildren: './education/education.module#EducationPageModule' },
  { path: 'Career', loadChildren: './career/career.module#CareerPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
