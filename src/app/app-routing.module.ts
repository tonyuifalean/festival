import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'attractions',
    loadChildren: () =>
      import('./attractions/attractions.module').then(
        (m) => m.AttractionsModule
      ),
  },
  {
    path: 'festivals',
    loadChildren: () =>
      import('./festivals/festivals.module').then((m) => m.FestivalsModule),
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'hotels',
    loadChildren: () =>
      import('./hotels/hotels.module').then((m) => m.HotelsModule),
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'restaurants',
    loadChildren: () =>
      import('./restaurants/restaurants.module').then(
        (m) => m.RestaurantsModule
      ),
  },
  {
    path: 'login',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    redirectTo: 'auth/register',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication').then(
        (m) => m.AuthenticationModule
      ),
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
