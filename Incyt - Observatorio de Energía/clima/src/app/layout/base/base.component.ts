import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  close() {
    (<HTMLElement> document.getElementById('wrapper')).classList.remove("open-menu");
  }


}