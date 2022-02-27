import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';

import { httpTranslateLoader } from '../app.module';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatExpansionModule,
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
