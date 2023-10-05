import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsReviewComponent } from './clients-review.component';

describe('ClientsReviewComponent', () => {
  let component: ClientsReviewComponent;
  let fixture: ComponentFixture<ClientsReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsReviewComponent]
    });
    fixture = TestBed.createComponent(ClientsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
