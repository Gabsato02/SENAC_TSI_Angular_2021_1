import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //  Nota: nome da tag HTML - no Vue: name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'appAula3'; //  Nota: propriedade - no Vue: data { return }
  frase = 'Não deixe para amanhã o que você pode deixar pra depois de amanhã';
}
