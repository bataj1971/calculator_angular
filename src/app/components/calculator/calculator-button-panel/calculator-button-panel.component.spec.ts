import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorButtonPanelComponent } from './calculator-button-panel.component';

describe('CalculatorButtonPanelComponent', () => {
  let component: CalculatorButtonPanelComponent;
  let fixture: ComponentFixture<CalculatorButtonPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorButtonPanelComponent]
    });
    fixture = TestBed.createComponent(CalculatorButtonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
