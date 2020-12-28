import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    nome: "",
    endereco: {
      logradouro: "",
      numero: null,
      cidade: "",
      estado: ""
    },
    telefone: "",
    pessoa_contato: "",
    pessoa: "",
    preferencial: null,
  }

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createClient(): void {
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente criado com sucesso')
      this.router.navigate(['/clients'])
    })
  }
  cancelClient(): void {
    this.router.navigate(['/clients'])
  }

}
