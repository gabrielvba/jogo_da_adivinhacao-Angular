import { Component, Input, OnInit } from '@angular/core';
import { JogoServiceService } from '../service/jogo-service.service';
import { SharedService } from '../service/shared-service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  
  max: number = 1000;
  min: number = 1;
  chute: number;
  mode = true;
  meusJogos = [];
  jogo;


  
  constructor(private jogoServiceService: JogoServiceService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedJogo.subscribe(jogo => this.jogo = jogo);
  }

  getRandomInt(): void {
    this.chute =  Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  addJogo(){
    this.jogoServiceService.addJogo(this.jogo).subscribe(
      jogo => {
        console.log(this.jogo)
      }, err =>{
        console.log('ERRO ao listar jogos')
      }
    ) 
  }

  jogarNovamente(){
    this.jogo.partidas += 1;
    this.jogo = {  
      nome: this.jogo.nome,
      tempoInicio: new Date().getTime(),
      tempoFim: 0,
      tentativas: 0,
      partidas: this.jogo.partidas,
    };
    this.mode = true;
  }

  numeroDiferente(){
    this.jogo.tentativas += 1;
    console.log(this.jogo); 
  }

  fimDaPartida(){
    this.jogo.tempoFim = new Date().getTime();
    this.addJogo();
    this.jogoServiceService.getJogosByName(this.jogo.nome).subscribe(
      meusJogos => {
        this.meusJogos = meusJogos;
      })
    this.mode = false;
  }
}


