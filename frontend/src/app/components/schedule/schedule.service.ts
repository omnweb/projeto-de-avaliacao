import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Schedule } from './schedule.model';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  baseUrl = "http://localhost:3001/visitas"

  constructor(
    private toast: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.toast.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
  create(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.baseUrl, schedule).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    )
  }


  read(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    )
  }

  readById(id: number): Observable<Schedule> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Schedule>(url).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    )
  }

  update(schedule: Schedule): Observable<Schedule> {
    const url = `${this.baseUrl}/${schedule.id}`
    return this.http.put<Schedule>(url, schedule).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    )
  }

  delete(id: number): Observable<Schedule> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Schedule>(url).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    )
  }

  errorHandler(err: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
