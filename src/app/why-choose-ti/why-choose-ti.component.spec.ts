import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseTiComponent } from './why-choose-ti.component';

describe('WhyChooseTiComponent', () => {
  let component: WhyChooseTiComponent;
  let fixture: ComponentFixture<WhyChooseTiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyChooseTiComponent]
    });
    fixture = TestBed.createComponent(WhyChooseTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
