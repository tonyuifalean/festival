import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { httpTranslateLoader } from '../app.module';
import { FestivalsRoutingModule } from './festivals-routing.module';
import { FestivalsComponent } from './festivals.component';

@NgModule({
  declarations: [FestivalsComponent],
  imports: [
    CommonModule,
    FestivalsRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateModule,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class FestivalsModule {}
