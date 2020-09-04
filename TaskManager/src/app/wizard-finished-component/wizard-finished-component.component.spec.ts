import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFinishedComponentComponent } from './wizard-finished-component.component';

describe('WizardFinishedComponentComponent', () => {
  let component: WizardFinishedComponentComponent;
  let fixture: ComponentFixture<WizardFinishedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardFinishedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFinishedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
