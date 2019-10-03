import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit() {
  }

  onResetUsername() {
    this.username = '';
  }

}
