import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorbComponent } from './compradorb.component';

describe('CompradorbComponent', () => {
  let component: CompradorbComponent;
  let fixture: ComponentFixture<CompradorbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompradorbComponent]
    });
    fixture = TestBed.createComponent(CompradorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
