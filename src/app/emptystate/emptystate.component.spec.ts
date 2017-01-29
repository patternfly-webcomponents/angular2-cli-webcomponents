/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmptystateComponent } from './emptystate.component';

describe('EmptystateComponent', () => {
  let component: EmptystateComponent;
  let fixture: ComponentFixture<EmptystateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptystateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptystateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
