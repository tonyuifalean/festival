import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.scss'],
})
export class FestivalsComponent implements OnInit {
  isLoading = true;
  displayedColumns = [
    { name: 'name', title: 'FESTIVAL.NAME' },
    { name: 'period', title: 'FESTIVAL.PERIOD' }
  ];
  dataSource = [
    { name: 'Festival 1', period: '01.08.2022 - 03.08.2022' },
    { name: 'Festival 2', period: '01.09.2022 - 03.09.2022' },
    { name: 'Festival 3', period: '01.10.2022 - 03.10.2022' },
  ];

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
