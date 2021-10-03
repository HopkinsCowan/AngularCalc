import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc2';
 answer = 0;
 numOne = 0;
 numTwo = 0;

numOneSubmit(value: string){

this.numOne = parseInt(value);

}

numTwoSubmit(value: string){

  this.numTwo = parseInt(value);

}



 add(){
  

    this.answer = this.numOne+this.numTwo;
    
   
 return;
 }
 


 
  sub(){
 
    this.answer = this.numOne-this.numTwo;

  return;
  }
 



 
 
   mul(){
  this.answer = this.numOne*this.numTwo;
   
    return;
  }




   div(){
 
    this.answer = this.numOne/this.numTwo;
  return;
  
  }

}
