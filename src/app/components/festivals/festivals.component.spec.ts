import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { FestivalsComponent } from './festivals.component';

describe('FestivalsComponent', () => {
  let component: FestivalsComponent;
  let fixture: ComponentFixture<FestivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FestivalsComponent],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
