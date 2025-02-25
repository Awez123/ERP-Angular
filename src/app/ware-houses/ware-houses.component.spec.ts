import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHousesComponent } from './ware-houses.component';

describe('WareHousesComponent', () => {
  let component: WareHousesComponent;
  let fixture: ComponentFixture<WareHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WareHousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WareHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
