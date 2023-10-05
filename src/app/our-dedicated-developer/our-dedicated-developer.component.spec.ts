import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDedicatedDeveloperComponent } from './our-dedicated-developer.component';

describe('OurDedicatedDeveloperComponent', () => {
  let component: OurDedicatedDeveloperComponent;
  let fixture: ComponentFixture<OurDedicatedDeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurDedicatedDeveloperComponent]
    });
    fixture = TestBed.createComponent(OurDedicatedDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
