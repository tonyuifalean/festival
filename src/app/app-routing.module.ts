import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'festival',
    loadChildren: () => import('./components').then(m => m.FestivalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
