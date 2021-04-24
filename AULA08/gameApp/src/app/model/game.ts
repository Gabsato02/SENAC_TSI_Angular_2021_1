export class Game {
  id?: number;
  name: string;
  genre = '';
  platform = '';
  status = 'NA';

  constructor(name: string) {
    this.name = name;
  }
}
