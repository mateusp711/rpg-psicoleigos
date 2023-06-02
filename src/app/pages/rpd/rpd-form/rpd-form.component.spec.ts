import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpdFormComponent } from './rpd-form.component';

describe('RpdFormComponent', () => {
  let component: RpdFormComponent;
  let fixture: ComponentFixture<RpdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
