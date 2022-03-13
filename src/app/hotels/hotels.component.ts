import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  isLoading = true;
  displayedColumns = [
    { name: 'name', title: 'HOTEL.NAME' },
    { name: 'location', title: 'HOTEL.LOCATION' }
  ];
  dataSource = [
    { name: 'Hotel 1', location: 'Str. 1, Nr. 1' },
    { name: 'Hotel 2', location: 'Str. 2, Nr. 1' },
    { name: 'Hotel 3', location: 'Str. 3, Nr. 1' },
  ];
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
