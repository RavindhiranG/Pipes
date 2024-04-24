import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipes';

  today: number = Date.now();



  name = "";

  dateOfBirth = "";

  //currency Convertor

  usdAmount = 0;
  inrAmount = 0;
  exchangeRate = 83.31; // exchange rate for demonstration

  convertToINR() {
    this.inrAmount = this.usdAmount * this.exchangeRate;
  }

  convertToUSD() {
    this.usdAmount = this.inrAmount / this.exchangeRate;
  }

  


 }
