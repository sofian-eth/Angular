// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DashoardService {

//   constructor(private http: HttpClient) { }

//   private url = "https://dummyjson.com/products";




//   getData() {
//     return this.http.get(this.url);
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashoardService {

  constructor(private http: HttpClient) { }

  private url = "https://dummyjson.com/todos";




  getData() {
    return this.http.get(this.url);
  }

  getDataWithId(id:number) {
    return this.http.get(this.url + '/' + id);
  }
}
