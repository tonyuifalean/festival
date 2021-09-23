import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss']
})
export class FestivalComponent {

  constructor(public translate: TranslateService) { }
}
