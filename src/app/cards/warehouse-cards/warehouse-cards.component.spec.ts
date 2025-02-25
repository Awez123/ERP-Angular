import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseCardsComponent } from './warehouse-cards.component';

describe('WarehouseCardsComponent', () => {
  let component: WarehouseCardsComponent;
  let fixture: ComponentFixture<WarehouseCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
