import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common'

import { HomeComponent } from './views/home/home.component'
import { ClientsCrudComponent } from './views/clients-crud/clients-crud.component'
import { ClientCreateComponent } from './components/client/client-create/client-create.component'
import { ClientUpdateComponent } from './components/client/client-update/client-update.component'
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component'
import { SchedulesCrudComponent } from './views/schedules-crud/schedules-crud.component'
import { ScheduleCreateComponent } from './components/schedule/schedule-create/schedule-create.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clients', component: ClientsCrudComponent },
  { path: 'clients/create', component: ClientCreateComponent },
  { path: 'clients/update/:id', component: ClientUpdateComponent },
  { path: 'clients/delete/:id', component: ClientDeleteComponent },
  { path: 'schedules', component: SchedulesCrudComponent },
  { path: 'schedules/create', component: ScheduleCreateComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
