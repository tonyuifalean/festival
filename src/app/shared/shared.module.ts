import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { httpTranslateLoader } from '@app/app.module';
import { TranslateModule } from '@ngx-translate/core';

import { SpinnerComponent, TableComponent } from './index';

@NgModule({
  declarations: [SpinnerComponent, TableComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateModule,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [SpinnerComponent, TableComponent]
})
export class SharedModule { }
