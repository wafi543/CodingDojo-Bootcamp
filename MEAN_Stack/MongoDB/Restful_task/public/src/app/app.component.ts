import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasks: Object;
  num: number;
  randNum: number;
  str: string;
  first_name: string;
  constructor (private _httpService: HttpService) {}
  ngOnInit(){
    this.getTasksFromService();
    this.num = 7;
    this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    this.str = 'Hello Angular Developer!';
    this.first_name = 'Alpha';
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
       observable.subscribe(data => {
          // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
          // This may be different for you, depending on how you set up your Task API.
          this.tasks = data;
          console.log(this.tasks)
       });
  }
}
