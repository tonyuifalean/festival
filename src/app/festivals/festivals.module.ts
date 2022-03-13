import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/shared';
import { httpTranslateLoader } from '../app.module';
import { FestivalsRoutingModule } from './festivals-routing.module';
import { FestivalsComponent } from './festivals.component';

@NgModule({
  declarations: [FestivalsComponent],
  imports: [
    CommonModule,
    FestivalsRoutingModule,
    SharedModule,
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
