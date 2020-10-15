import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:8082/jogos';

@Injectable({
  providedIn: 'root'
})
export class JogoServiceService {

  constructor(private http: HttpClient) { }

  getRank(): Observable<any[]> {
    const url = `${apiUrl}/rank`;
    return this.http.get<any>(apiUrl+"/rank");
  }

  getJogosByName(nome: string): Observable<any> {
    const url = `${apiUrl}/meusJogos?name=${nome}`;
    return this.http.get<any>(url)
  }

  addJogo (jogo: any): Observable<any> {
  return this.http.post<any>(apiUrl, jogo, httpOptions)
  }

}
