import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/festivals', pathMatch: 'full' },
  { path: 'admin', component: HomeComponent },
  {
    path: 'attractions',
    loadChildren: () =>
      import('./attractions').then(
        (m) => m.AttractionsModule
      ),
  },
  {
    path: 'festivals',
    loadChildren: () => import('./festivals').then((m) => m.FestivalsModule),
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels').then((m) => m.HotelsModule),
  },
  {
    path: 'news',
    loadChildren: () => import('./news').then((m) => m.NewsModule),
  },
  {
    path: 'restaurants',
    loadChildren: () =>
      import('./restaurants').then(
        (m) => m.RestaurantsModule
      ),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog').then((m) => m.BlogModule),
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
