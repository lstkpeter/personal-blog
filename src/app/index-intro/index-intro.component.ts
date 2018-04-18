import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-intro',
  templateUrl: './index-intro.component.html',
  styleUrls: ['./index-intro.component.css']
})
export class IndexIntroComponent implements OnInit {

  private ICON = require("./assets/icon.jpg");

  constructor() { }

  ngOnInit() {
  }

}
