import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.sass']
})
export class BindingsComponent implements OnInit {

  imagePath = '/assets/images/';
  name = 'Lebron James';
  className = 'champion';
  classPF = 'players__images--PF';
  classPG = 'players__images--PG';
  classC = 'players__images--C';
  mainTeam = true;
  pathPF = `${this.imagePath}AD.jpg`;
  pathPG = `${this.imagePath}Schroder.jpg`;
  pathC = `${this.imagePath}Gasol.jpg`;

  constructor() { }

  ngOnInit(): void {
  }

  capitalize(position: string): string {
    return position.toLocaleUpperCase();
  }

  showMessage(): void {
    alert('LAKÃO CAMPEÃO!');
  }

  currentTeam(): string {
    return (!this.mainTeam) ? 'Titulares' : 'Reservas';
  }

  swapImages(): void {
    this.mainTeam = !this.mainTeam;

    if (this.mainTeam) {
      this.pathPF = `${this.imagePath}AD.jpg`;
      this.pathPG = `${this.imagePath}Schroder.jpg`;
      this.pathC = `${this.imagePath}Gasol.jpg`;
    } else {
      this.pathPF = `${this.imagePath}Kuzma.jpg`;
      this.pathPG = `${this.imagePath}Caruso.jpg`;
      this.pathC = `${this.imagePath}Harrell.jpg`;
    }
  }

}
