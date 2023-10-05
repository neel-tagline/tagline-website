import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsReviewCardComponent } from './clients-review-card.component';

describe('ClientsReviewCardComponent', () => {
  let component: ClientsReviewCardComponent;
  let fixture: ComponentFixture<ClientsReviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsReviewCardComponent]
    });
    fixture = TestBed.createComponent(ClientsReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
