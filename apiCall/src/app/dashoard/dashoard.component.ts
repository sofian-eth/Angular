import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { DashoardService } from '../service/dashoard.service';

@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.css']
})
export class DashoardComponent implements OnInit, AfterViewInit,OnDestroy {

  constructor(private _dashoardService: DashoardService) { }
  productList: any;


  ngAfterViewInit(): void {
  }



  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._dashoardService.getData().subscribe((data: any) => {
      this.productList = data;
    });
  }

  ngOnDestroy(): void {
   
  }
  





}
