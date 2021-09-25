import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'attractions',
    loadChildren: () => import('./components').then(m => m.AttractionsModule)
  },
  {
    path: 'festivals',
    loadChildren: () => import('./components').then(m => m.FestivalsModule)
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'hotels',
    loadChildren: () => import('./components').then(m => m.HotelsModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./components').then(m => m.NewsModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./components').then(m => m.RestaurantsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
