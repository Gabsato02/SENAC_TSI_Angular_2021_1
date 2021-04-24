import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../../model/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  games = new Array<Game>();
  selectedGame?: Game;
  editMode = false;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh(): void {
    this.games = this.gameService.list();
  }

  newGame(): void {
    this.selectedGame = new Game('');
    this.editMode = false;
  }

  editGame(game: Game): void {
    this.editMode = true;
    this.selectedGame = game;
    this.refresh();
  }

  removeGame(id?: number): void {
    if (id === undefined) { return; }
    this.gameService.remove(id);
    this.refresh();
  }

  saveGame(): void {
    if (this.selectedGame) {
      if (this.editMode) {
        this.gameService.update(this.selectedGame);
      } else {
        this.gameService.insert(this.selectedGame);
      }
    }

    this.selectedGame = undefined;
    this.refresh();
  }
}
