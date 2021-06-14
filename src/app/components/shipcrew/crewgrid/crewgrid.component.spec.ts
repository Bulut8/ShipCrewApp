import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewgridComponent } from './crewgrid.component';

describe('CrewgridComponent', () => {
  let component: CrewgridComponent;
  let fixture: ComponentFixture<CrewgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
