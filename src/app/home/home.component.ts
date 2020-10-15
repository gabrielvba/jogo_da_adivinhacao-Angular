import { Component, OnInit } from '@angular/core';
import { JogoServiceService } from '../service/jogo-service.service';
import { SharedService } from '../service/shared-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jogo;
  
  constructor(private jogoServiceService: JogoServiceService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedJogo.subscribe(jogo => this.jogo = jogo);
  }
 
  jogar() {
    this.jogoServiceService.getJogosByName(this.jogo.nome).subscribe(
      jogos => {
        if (jogos.content[0] != null && jogos.content[0] != undefined ){
          this.jogo.partidas = jogos.content[0].partidas + 1;
          this.jogo.tempoInicio = new Date().getTime();
          this.jogo.tempoFim = 0;
          this.jogo.tentativas = 0;
        } else {
          this.jogo.partidas = 1;
          this.jogo.tempoInicio = new Date().getTime();
          this.jogo.tempoFim = 0;
          this.jogo.tentativas = 0;
        }
        console.log(this.jogo.partidas);
      }, err =>{
        console.log('ERRO ao buscar jogos de ' + this.jogo.nome);
      }
    ) 
  }
}
