import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex0102',
  templateUrl: './ex0102.component.html',
  styleUrls: ['./ex0102.component.sass']
})
export class Ex0102Component implements OnInit {

  arrayEX1 = ['AD', 'Gasol', 'Caruso', 'Harrell', 'Kuzma', 'Schroder'];
  currentImageEX1 = '';

  arrayEX2 = ['EUA', 'Inglaterra', 'Alemanha', 'Rússia'];

  constructor() { }

  ngOnInit(): void {
  }

  getName(value: string): void {
    this.currentImageEX1 = value;
  }

  showCapital(value: string): void {
    const country = value;

    switch(country) {
      case ('EUA'):
        alert('Washington DC');
        break;
      case ('Inglaterra'):
        alert('Londres');
        break;
      case ('Alemanha'):
        alert('Berlim');
        break;
      case ('Rússia'):
        alert('Moscou');
        break;
    }
  }
}
