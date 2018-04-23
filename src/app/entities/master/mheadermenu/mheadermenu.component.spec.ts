import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MheadermenuComponent } from './mheadermenu.component';

describe('MheadermenuComponent', () => {
  let component: MheadermenuComponent;
  let fixture: ComponentFixture<MheadermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MheadermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MheadermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
