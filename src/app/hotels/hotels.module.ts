import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { httpTranslateLoader } from '../app.module';
import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';

@NgModule({
  declarations: [
    HotelsComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateModule,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ]
})
export class HotelsModule { }
