import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent implements OnInit {

  clientes = new Array<Cliente>();
  cliente?: Cliente;
  modoEdicao = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  novo(): void {
    this.cliente = new Cliente();
  }

  limpar(): void {
    this.cliente = undefined;
    this.modoEdicao = false;
  }

  salvar(): void {
    if (!this.modoEdicao) {
      this.clienteService.inserir(this.cliente).subscribe(() => {
        this.limpar();
        this.listar();
      });
    } else {
      this.clienteService.atualizar(this.cliente).subscribe(() => {
        this.limpar();
        this.listar();
      });
    }

  }

  editar(cliente: Cliente): void {
    this.cliente = cliente;
    this.modoEdicao = true;
  }

  apagar(id?: number): void {

    if (!id) { return; }

    this.clienteService.apagar(id).subscribe(() => {
      this.limpar();
      this.listar();
    });
  }
}
