import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVishwasForminputsComponent } from './ng-vishwas-forminputs.component';

describe('NgVishwasForminputsComponent', () => {
  let component: NgVishwasForminputsComponent;
  let fixture: ComponentFixture<NgVishwasForminputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgVishwasForminputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgVishwasForminputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
