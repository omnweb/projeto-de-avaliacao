import { ScheduleService } from './../schedule.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../schedule.model';
import { Client } from '../../client/client.model'
import { ClientService } from '../../client/client.service'

@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.css']
})
export class ScheduleCreateComponent implements OnInit {
  clients: Client[]

  schedule: Schedule = {
    cliente: null,
    data: "",
    hora: "",
    motivo: "",
    status: "",
    resultado: ""
  }

  constructor(
    private scheduleService: ScheduleService,
    private router: Router,
    private clientService: ClientService

  ) { }

  ngOnInit(): void {
    this.clientService.read().subscribe(clients => {
      this.clients = clients

    })

  }

  createSchedule(): void {
    this.scheduleService.create(this.schedule).subscribe(() => {
      this.scheduleService.showMessage('Consulta Agendada')
      this.router.navigate(['/schedules'])
    })
  }
  cancelSchedule(): void {
    this.router.navigate(['/schedules'])
  }

  FormataStringData(data) {
    var ano = data.split("/")[0];
    var mes = data.split("/")[1];
    var dia = data.split("/")[2];

    return dia + '-' + ("0" + mes).slice(-2) + '-' + (ano).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.

  }
}
