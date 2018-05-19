import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  result : number = 0; //  instance variable
  
  constructor() { }

  ngOnInit() {
  }

  add(num1:string,num2:string):void{
    this.result = parseInt(num1) + parseInt(num2);
  }  

  sub(num1:string,num2:string):void{
    this.result = parseInt(num1) - parseInt(num2);
  }

  mul(num1:string,num2:string):void{
    this.result = parseInt(num1) * parseInt(num2);
  }

  div(num1:string,num2:string):void{
    let n2 = parseInt(num2);
    if(n2 != 0){
      this.result = parseInt(num1) / parseInt(num2);
    }    
  }
}
