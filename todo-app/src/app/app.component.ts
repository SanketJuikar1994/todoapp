import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'todo-app';
  private url: string = 'http:localhost/3000/gettask';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    console.log('createed');
    this.getList();
  }

  getList = async () => {
    console.log('33333');
    const xyz = 'http://localhost/3000/gettask';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Credentials', '*');

    return this.httpClient.get(xyz, { headers }).subscribe((res) => {
      console.log('getData', res);
    });
  };
}
