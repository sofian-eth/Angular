import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName:string = "New Marriot Hotel Peshawar, Pakistan";
  hotelRooms:number = 18;

  constructor() {}

  ngOnInit(): void {
    
  }

}
