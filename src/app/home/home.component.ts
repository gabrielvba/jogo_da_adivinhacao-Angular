import { Component, OnInit } from '@angular/core';
import { JogoServiceService } from '../jogo-service.service';
import { JogoDTO } from './jogoDTO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  max: number = 1000;
  min: number = 1;
  chute: number;
  meusJogos = [];
  rank = [];
  jogo = {
    nome: "",
    tempoInicio: 0,
    tempoFim: 0,
    tentativas: 0,
    partidas: 0,
  };
  
  constructor(private jogoServiceService: JogoServiceService) { }

  ngOnInit(): void {
    this.getRank();
    this.getRandomInt();
  }
 
  getRandomInt(): void {
    this.chute =  Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
  
  getRank(){
    this.jogoServiceService.getRank().subscribe(
      jogo => {
        this.rank = jogo;
        console.log(jogo);
        console.log(this.rank );
      }, err =>{
        console.log('ERRO ao listar jogos')
      }
    ) 
  }

  getJogosByName(){
    this.jogoServiceService.getJogosByName(this.jogo.nome).subscribe(
      jogos => {
        if (jogos != null){
          this.meusJogos = jogos;
          this.jogo.partidas = jogos.content[0].partidas;
        } 
        console.log(this.jogo.partidas);
      }, err =>{
        console.log('ERRO ao buscar jogos de ' + this.jogo.nome);
      }
    ) 
  }

  addProduto(){
    this.jogoServiceService.addProduto(this.jogo).subscribe(
      jogo => {
        console.log(this.jogo)
      }, err =>{
        console.log('ERRO ao listar jogos')
      }
    ) 
  }

  jogarNovamente(){
    console.log(this.jogo.partidas);
    console.log(this.jogo);
    this.jogo.partidas += 1;
    this.jogo = {  
      nome: this.jogo.nome,
      tempoInicio: 0,
      tempoFim: 0,
      tentativas: 0,
      partidas: this.jogo.partidas,
    };
    console.log(this.jogo.partidas);
    console.log(this.jogo); 

  }

  numeroDiferente(){
    this.jogo.tentativas += 1;
    console.log(this.jogo); 
  }

  
}
