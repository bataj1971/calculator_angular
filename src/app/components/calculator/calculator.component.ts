import { Component } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';
import { CalculatorResultInterface } from 'src/app/services/CalculatorResultInterface';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  result: CalculatorResultInterface;

  constructor(private calculatorService: CalculatorService) {
    this.result = this.calculatorService.processButton('0');
  }

  handleButtonClicked(buttonCmd: string) {
    console.log('Calculator - handleButtonClicked', buttonCmd);
    this.result = this.calculatorService.processButton(buttonCmd);
    console.log('result:', this.result);
  }


}
