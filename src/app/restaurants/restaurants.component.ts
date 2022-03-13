import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  isLoading = true;
  displayedColumns = [
    { name: 'name', title: 'RESTAURANT.NAME' },
    { name: 'location', title: 'RESTAURANT.LOCATION' }
  ];
  dataSource = [
    { name: 'Restaurant 1', location: 'Str. 1, Nr. 1' },
    { name: 'Restaurant 2', location: 'Str. 2, Nr. 1' },
    { name: 'Restaurant 3', location: 'Str. 3, Nr. 1' },
  ];

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
