import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  first: number = 0;
  loop : any = [
    1,2,3,4,5,6,7,8,9,10
  ];
  showTable:boolean=false;
  constructor(){}

  onSubmit(){
    this.showTable=true;
  }
}
