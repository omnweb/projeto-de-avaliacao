import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  clients: Client[]
  displayedColumns = ['id', 'nome', 'endereco.logradouro', 'endereco.numero', 'endereco.cidade', 'endereco.estado', 'telefone', 'pessoa_contato', 'pessoa', 'preferencial', "action"];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.read().subscribe(clients => {
      this.clients = clients
    })
  }

}
