import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-clients-crud',
  templateUrl: './clients-crud.component.html',
  styleUrls: ['./clients-crud.component.css']
})
export class ClientsCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Cadastro de Clientes',
      icon: 'group_add',
      routeUrl: '/clients'
    }

  }

  ngOnInit(): void {
  }

  navigateToClientCreate(): void {
    this.router.navigate(['/clients/create']);
  }

}
