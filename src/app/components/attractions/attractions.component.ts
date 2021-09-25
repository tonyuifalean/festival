import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent {

  constructor(public translate: TranslateService) { }
}
