import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.sass']
})
export class Exercicio01Component implements OnInit {

  name = 'Gabriel';
  lastName = 'Sato';

  constructor() { }

  ngOnInit(): void {
  }

}
