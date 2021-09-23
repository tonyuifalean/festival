import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { httpTranslateLoader } from '../../app.module';
import { FestivalRoutingModule } from './festival-routing.module';
import { FestivalComponent } from './festival.component';

@NgModule({
  declarations: [
    FestivalComponent
  ],
  imports: [
    CommonModule,
    FestivalRoutingModule,
    TranslateModule.forChild({
      loader: {provide: TranslateModule, useFactory: httpTranslateLoader, deps: [HttpClient]}
    })
  ]
})
export class FestivalModule { }
