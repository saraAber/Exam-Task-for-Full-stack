import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePolicyDetailsComponent } from './insurance-policy-details.component';

describe('InsurancePolicyDetailsComponent', () => {
  let component: InsurancePolicyDetailsComponent;
  let fixture: ComponentFixture<InsurancePolicyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsurancePolicyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancePolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
