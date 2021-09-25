import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FestivalsComponent } from './festivals.component';

const routes: Routes = [{ path: '', component: FestivalsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FestivalsRoutingModule {}
