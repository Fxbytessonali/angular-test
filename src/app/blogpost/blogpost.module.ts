import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './categories/categories.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';

@NgModule({



  declarations: [BlogpostFeaturedComponent,  BlogpostDetailComponent, BlogpostRecentComponent, CategoriesComponent, BlogpostListComponent],

exports: [
    BlogpostFeaturedComponent
  ],


  imports: [
    CommonModule,
    BlogpostRoutingModule
  ]
})
export class BlogpostModule { }
