import { Component } from '@angular/core';

@Component({
  selector: 'app-money-input',
  templateUrl: './money-input.component.html',
  styleUrls: ['./money-input.component.css']
})
export class MoneyInputComponent {
  textEntry = "";
  resultMessage = "";
  constructor() { }

  onChangeEvent(event: any) {
    this.textEntry = event.target.value
  }
  
  verify() {
    const regex = /^(\d*)(\.?)(\d*)([m,M,b,B,k]?)$/;
    const commaRegex = /\B(?=(\d{3})+(?!\d))/g;
    let tempParts = this.textEntry.match(regex);
    if (!tempParts) { 
      this.resultMessage = "You gotta talk the talk";
    } else {
      let answer = (tempParts[1] ? parseInt(tempParts[1]) : 0);
      if (tempParts[2]) {
        const power = tempParts[3].length;
        let decimal = parseInt(tempParts[3]);
        answer = answer + (decimal/(Math.pow(10, power)));
      }
      switch (tempParts[4]) {
        case "b":
        case "B":
          answer = answer * 1000000000;
          break;
        case "m":
        case "M":
          answer = answer * 1000000;
          break;
        case "k":
          answer = answer * 1000;
          break;
        default:
      }
      let parts = answer.toString().split(".");
      this.resultMessage = parts[0].replace(commaRegex, ",") + (parts[1] ? "." + parts[1] : "") + " TENDIES!";
    }
  }
}
