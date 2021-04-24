import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {
  // Exemplo
  nome = '';
  // Exercício 1
  num1 = 0;
  num2 = 0;
  // Exercício 2
  dog = '';
  // Exemplo 2
  estado = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Exemplo
  limpar(): void {
    this.nome = '';
  }
  // Exercício 1
  sum(): number {
    return this.num1 + this.num2;
  }
  // Exercício 2
  dogImage(): string {
    return `/assets/images/${this.dogImage}.jpg`;
  }

}
