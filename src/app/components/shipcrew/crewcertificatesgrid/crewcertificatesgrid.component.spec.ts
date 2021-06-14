import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewcertificatesgridComponent } from './crewcertificatesgrid.component';

describe('CrewcertificatesgridComponent', () => {
  let component: CrewcertificatesgridComponent;
  let fixture: ComponentFixture<CrewcertificatesgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewcertificatesgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewcertificatesgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
