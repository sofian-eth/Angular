import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
first : number = 0;
second : number = 0;
third : number = 0;
loop : any = [
  1,2,3,4,5,6,7,8,9,10
];
constructor(){}

ngOnInit() : void{

}

onSubmit(){
  this.third = this.first + this.second;
}
}
