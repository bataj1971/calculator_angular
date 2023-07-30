import { Injectable } from '@angular/core';
import { CalculatorResultInterface } from './CalculatorResultInterface';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private result: number; // what is our current result value to calculate with
  private screenvalue: number; // what is on the screenvalue
  private status: string; // what are we doing ( +,-,/,*, etc...)
  private commastatus: string; // what are we doing ( +,-,/,*, etc...)
  private memory: number; // memory value for memory buttons on the calculator
  private error: string; // errormessage if any
  private screenSize: number;

  constructor() {
    this.result = 0;
    this.screenvalue = 0;
    this.status = '';
    this.commastatus = '';
    this.memory = 0;
    this.error = '';
    this.screenSize = 13;
  }

  processButton(buttonId: string): CalculatorResultInterface {
    switch (buttonId) {
      case 'plus':
      case 'minus':
      case 'multiply':
      case 'divide':
        this.process();
        this.status = buttonId;
        this.result = this.screenvalue;
        this.screenvalue = 0;
        break;

      // memory buttons handling
      case 'memory-in':
        this.memory = this.screenvalue;
        this.screenvalue = 0;
        break;
      case 'memory-out':
        this.screenvalue = this.memory;
        break;
      case 'memory-clear':
        this.memory = 0;
        break;

      // decimal point
      case 'point':
        if (String(this.screenvalue).indexOf('.') < 0) {
          this.commastatus = buttonId;
        }
        break;

      // equak button
      case 'equal':
        this.process();
        this.status = 'clear';
        break;
      // clear button
      case 'clear':
        this.result = 0;
        this.screenvalue = 0;
        this.error = ''; // reset error status
        break;

      default:
        // number buttons
        if ('0123456789'.indexOf(buttonId) >= 0) {
          if (this.status == 'clear') {
            this.screenvalue = 0;
            this.status = '';
          }
          if (this.commastatus == 'point') {
            this.screenvalue = Number(
              String(this.screenvalue) + '.' + buttonId
            );
            this.commastatus = '';
          } else {
            this.screenvalue = Number(String(this.screenvalue) + buttonId);
          }
        }
        break;
    }
    if (this.screenvalue.toString().length > this.screenSize) {
      this.error = 'e:overflow';
    }

    console.log("service:",this.screenvalue,this.status,this.memory,this.error);

    return {
      screen: (this.error ? this.error : this.screenvalue.toString() ),
      status: this.status,
      memory: (this.memory ? 'M':' '),
    };
  }

  /**
   * processing values depending on statatus
   */
  private process() {
    switch (this.status) {
      case 'plus':
        this.result += this.screenvalue;
        this.screenvalue = this.result;
        break;

      case 'minus':
        this.result -= this.screenvalue;
        this.screenvalue = this.result;
        break;

      case 'multiply':
        this.result *= this.screenvalue;
        this.screenvalue = this.result;
        break;

      case 'divide':
        if (this.screenvalue == 0) {
          this.error = 'e:zerodiv'; // setting error if divide by zero
        } else {
          this.result = this.result / this.screenvalue;
          this.screenvalue = this.result;
        }
        break;

      default:
        // do nothing..
        break;
    }

    this.status = ''; // clear status
  }
}
