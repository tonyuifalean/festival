import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService, User } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mobileQuery: MediaQueryList;

  fillerNav = [
    {
      name: 'Home',
      route: 'home',
    },
    {
      name: 'Festivals',
      route: 'festivals',
    },
    {
      name: 'News',
      route: 'news',
    },
    {
      name: 'Attractions',
      route: 'attractions',
    },
    {
      name: 'Hotels',
      route: 'hotels',
    },
    {
      name: 'Restaurants',
      route: 'restaurants',
    },
  ];
  public currentUser: User = {};
  private _mobileQueryListener: () => void;

  constructor(
    public translate: TranslateService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // list of available languages
    translate.addLangs(['en', 'ro']);

    // language that will be used by default
    translate.setDefaultLang('en');

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  /**
   * Translate the language constants to the given language
   * @param lang
   */
  switchLang(lang: string): void {
    this.translate.use(lang);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
