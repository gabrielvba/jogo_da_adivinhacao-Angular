import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private jogo = new BehaviorSubject({
    nome: "",
    partidas: 0,
    tentativas: 0,
    tempoInicio: 0,
    tempoFim: 0
  });
  sharedJogo = this.jogo.asObservable();

  constructor() { }

  nextJogo(jogo: any) {
    this.jogo.next(jogo);
  }

}
