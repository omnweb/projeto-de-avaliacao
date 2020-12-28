import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from './client.model';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = 'http://localhost:3001/clientes'

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

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    )
  }


  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    )
  }

  readById(id: number): Observable<Client> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Client>(url).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    )
  }

  update(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/${client.id}`
    return this.http.put<Client>(url, client).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    )
  }

  delete(id: number): Observable<Client> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Client>(url).pipe(
      map(obj => obj),
      catchError(err => this.errorHandler(err))
    )
  }

  errorHandler(err: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
