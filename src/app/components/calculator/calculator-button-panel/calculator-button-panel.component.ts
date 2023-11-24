import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import buttonData from './ButtonData.json';
import { ButtonInterface } from '../ButtonInterface';

@Component({
  selector: 'app-calculator-button-panel',
  templateUrl: './calculator-button-panel.component.html',
  styleUrls: ['./calculator-button-panel.component.scss'],
})
export class CalculatorButtonPanelComponent {
  @Output()
  buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  buttons: Array<ButtonInterface> = [];
  constructor() {
    buttonData.forEach((button: Array<any>) => {
      this.buttons.push({
        cmd: button[0],
        label: button[1],
        classes: ['button', ...button[2].split(' ')],
        keyCodes: button[3],
      });
    });
  }

  handleButtonClick(buttonCmd: string) {
    this.buttonClicked.emit(buttonCmd);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyPressed($event: KeyboardEvent) {

    const keyCode = $event.code;

    this.buttons.map(button => {
      if (button.keyCodes.includes(keyCode)) {
        this.handleButtonClick(button.cmd);
      }
    });
  }
}
