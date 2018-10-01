import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineClassesComponent } from './offline-classes.component';

describe('OfflineClassesComponent', () => {
  let component: OfflineClassesComponent;
  let fixture: ComponentFixture<OfflineClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
