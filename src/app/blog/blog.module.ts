import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

import { SpinnerComponent } from '@app/components/spinner/spinner.component';
import { httpTranslateLoader } from '../app.module';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostComponent } from './subcomponents/blog-post/blog-post.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogPostComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateModule,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ]
})
export class BlogModule { }
