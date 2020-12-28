import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service'
import { Schedule } from '../schedule.model'

@Component({
  selector: 'app-schedule-read',
  templateUrl: './schedule-read.component.html',
  styleUrls: ['./schedule-read.component.css']
})
export class ScheduleReadComponent implements OnInit {
  schedules: Schedule[];
  displayedColumns = ['id', 'cliente', 'data', 'hora', 'motivo', 'status', 'resultado'];


  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.read().subscribe(schedule => {
      this.schedules = schedule
    })
  }

}
