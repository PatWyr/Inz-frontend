import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationSideBarComponent } from './certification-side-bar.component';

describe('CertificationSideBarComponent', () => {
  let component: CertificationSideBarComponent;
  let fixture: ComponentFixture<CertificationSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
