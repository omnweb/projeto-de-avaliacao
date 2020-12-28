import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';


@Component({
  selector: 'app-schedules-crud',
  templateUrl: './schedules-crud.component.html',
  styleUrls: ['./schedules-crud.component.css']
})
export class SchedulesCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Agendamento de Consultas',
      icon: 'book_online',
      routeUrl: '/schedules'
    }
  }

  ngOnInit(): void {
  }

  navigateToScheduleCreate(): void {
    this.router.navigate(['/schedules/create']);
  }

}
