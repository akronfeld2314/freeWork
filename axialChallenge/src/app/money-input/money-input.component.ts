import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-input',
  templateUrl: './money-input.component.html',
  styleUrls: ['./money-input.component.css']
})
export class MoneyInputComponent implements OnInit {
  moneyValid = false;
  entry = "enter your winnings";
  test = "";
  simpleCheck = "";
  constructor() { }

  ngOnInit(): void {
  }

  onChangeEvent(event: any) {
    this.moneyValid = !this.moneyValid;
  }
  
  verify(test) {
    this.simpleCheck = test;
  }
}
