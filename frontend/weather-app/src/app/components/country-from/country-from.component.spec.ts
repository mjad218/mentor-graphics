import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFromComponent } from './country-from.component';

describe('CountryFromComponent', () => {
  let component: CountryFromComponent;
  let fixture: ComponentFixture<CountryFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
