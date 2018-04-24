import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaResponsiveComponent } from './grilla-responsive.component';

describe('GrillaResponsiveComponent', () => {
  let component: GrillaResponsiveComponent;
  let fixture: ComponentFixture<GrillaResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
