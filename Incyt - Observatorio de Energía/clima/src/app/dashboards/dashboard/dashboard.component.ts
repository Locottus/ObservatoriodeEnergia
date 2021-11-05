import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tabs = [
    { id: 1, text: 'Cobertura Eléctrica' },
    { id: 2, text: 'Histórico de Energía' },
    { id: 3, text: 'Balance de Matriz Energética' },
    { id: 4, text: 'Flujo Energético' }
  ];
  active = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange(id : number){
    this.active = id;
  }

}
