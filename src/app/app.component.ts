import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService, User } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  mobileQuery: MediaQueryList;

  fillerNav = [
    {
      name: 'MENU.HOME',
      route: 'home',
    },
    {
      name: 'MENU.FESTIVALS',
      route: 'festivals',
    },
    {
      name: 'MENU.NEWS',
      route: 'news',
    },
    {
      name: 'MENU.ATTRACTIONS',
      route: 'attractions',
    },
    {
      name: 'MENU.HOTELS',
      route: 'hotels',
    },
    {
      name: 'MENU.RESTAURANTS',
      route: 'restaurants',
    },
    {
      name: 'MENU.BLOG',
      route: 'blog',
    },
  ];
  public currentUser: User = {};
  public selectedLanguage: 'en' | 'ro' = 'en';
  public isAdminRoute = false;
  private _mobileQueryListener: () => void;

  constructor(
    public translate: TranslateService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // list of available languages
    translate.addLangs(['en', 'ro']);

    // language that will be used by default
    translate.setDefaultLang(this.selectedLanguage);

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    // Needed to display Login link if the route contains admin
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isAdminRoute = event.url.includes('admin');
      }
    });
  }

  /**
   * Translate the language constants to the given language
   * @param lang
   */
  switchLang(): void {
    this.selectedLanguage = this.selectedLanguage === 'en' ? 'ro' : 'en';
    this.translate.use(this.selectedLanguage);
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
