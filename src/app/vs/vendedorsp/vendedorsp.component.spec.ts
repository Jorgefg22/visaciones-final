import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorspComponent } from './vendedorsp.component';

describe('VendedorspComponent', () => {
  let component: VendedorspComponent;
  let fixture: ComponentFixture<VendedorspComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendedorspComponent]
    });
    fixture = TestBed.createComponent(VendedorspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
