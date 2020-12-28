import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter()

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit()
  }

  get title(): string {
    return this.headerService.headerData.title
  }
  get icon(): string {
    return this.headerService.headerData.icon
  }
  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }
}
