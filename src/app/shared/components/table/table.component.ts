import { Component, Input, OnInit } from '@angular/core';

export interface ColumnElement {
  name: string;
  title: string;
}

export interface FestivalElement {
  name: string;
  period: string;
}

export interface HotelElement {
  name: string;
  location: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() dataSource!: (FestivalElement|HotelElement)[];
  @Input('displayedColumns')
  set displayedColumns(val: ColumnElement[]) {
    this._displayedColumns = val;
    this.displayedColumnsNames = val.map((column) => column.name);
  }
  get displayedColumns(): ColumnElement[] {
    return this._displayedColumns;
  }

  displayedColumnsNames: string[] = [];
  private _displayedColumns: ColumnElement[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
