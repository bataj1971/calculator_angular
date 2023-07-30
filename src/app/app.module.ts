import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalculatorScreenComponent } from './components/calculator/calculator-screen/calculator-screen.component';
import { CalculatorButtonPanelComponent } from './components/calculator/calculator-button-panel/calculator-button-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeaderComponent,
    FooterComponent,
    CalculatorScreenComponent,
    CalculatorButtonPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
