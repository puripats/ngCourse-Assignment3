import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayPassword = false
  log=[]

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayDetails(){
    this.displayPassword=true
    this.log.push(this.log.length+1)
      }


}
