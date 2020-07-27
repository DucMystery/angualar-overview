import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesome-calculator',
  templateUrl: './awesome-calculator.component.html',
  styleUrls: ['./awesome-calculator.component.css']
})
export class AwesomeCalculatorComponent implements OnInit {
  title = 'Awesome Calculator';
  output: number;
  first: number;
  second: number;
  operator: string;

  constructor() { }

  onFirstChange(value){
    this.first = Number(value);
  }

  onSecondChange(value){
    this.second = Number(value);
  }
  onSelectChange(value){
    this.operator =value;
  }

  calculator(){
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }

  ngOnInit(): void {
  }

}
