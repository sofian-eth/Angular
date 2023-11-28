// import { Component, OnInit } from '@angular/core';
// import { DashoardService } from '../service/dashoard.service';

// @Component({
//   selector: 'app-dashboard2',
//   templateUrl: './dashboard2.component.html',
//   styleUrls: ['./dashboard2.component.css']
// })
// export class Dashboard2Component implements OnInit {
//   constructor(private _dashboardService:DashoardService){}

  
//   ngOnInit(): void {
//     this._dashboardService.getData().subscribe(data=>{

//     });
//   }



// }

import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { DashoardService } from '../service/dashoard.service';

@Component({
  selector: 'app-dashoard',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit, AfterViewInit,OnDestroy {

  constructor(private _dashoardService: DashoardService) { }
  productList: any;
  inputText: number = 0;
  

  ngAfterViewInit(): void {
  }



  ngOnInit(): void {
    this.getData();
  }

  fetchData(){
    if(this.inputText == 0 || !this.inputText){
      this.getData();
      return;
    }

    this.getDataWithId(this.inputText);
  }

  getData(){
    this._dashoardService.getData().subscribe((data: any) => {
      if(data.todos.length == 0){
        return
      }
      this.productList = data.todos;
    });
  }
  

  getDataWithId(id:any) {    
    // id = id.target.value;
    this._dashoardService.getDataWithId(id).subscribe((data: any) => {
      this.productList = [];
      this.productList.push(data);
    })
  }

  
  ngOnDestroy(): void {
   
  }

}
