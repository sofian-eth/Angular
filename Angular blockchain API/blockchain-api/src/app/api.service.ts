import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000'; // Replace with your Nest.js API URL

  constructor(private http: HttpClient) {}

  createData(data: any): Observable<any> {
    const url = `${this.apiUrl}/mumbai/deploy`;
    return this.http.post(url, data);
  }

  deployERC721(data: any): Observable<any> {
    const url = `${this.apiUrl}/mumbai/deployerc721`;
    return this.http.post(url, data);
  }
}
