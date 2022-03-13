import { Component } from '@angular/core';

import { AuthenticationService, User } from '@app/shared';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public currentUser: User = {};

  constructor(
    public translate: TranslateService,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
}
