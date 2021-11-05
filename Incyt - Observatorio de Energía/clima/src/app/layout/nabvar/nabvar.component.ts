import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document
    ) { }

  ngOnInit(): void {
  }

  addClass() {
    (<HTMLElement> document.getElementById('wrapper')).classList.add("open-menu");
  }

  close() {
    (<HTMLElement> document.getElementById('wrapper')).classList.remove("open-menu");
  }

}
