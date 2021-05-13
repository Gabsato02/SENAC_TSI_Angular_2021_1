import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.sass']
})
export class EnderecoComponent implements OnInit {

  cep = '';
  endereco?: Endereco;
  isLoading = false;

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
  }

  consultar(): void {
    this.isLoading = true;

    this.enderecoService.obterEndereco(this.cep).subscribe((endereco) => {
      this.endereco = endereco;

      this.isLoading = false;
    });
  }

}
