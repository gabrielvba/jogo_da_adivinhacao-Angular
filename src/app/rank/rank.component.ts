import { Component, OnInit } from '@angular/core';
import { JogoServiceService } from '../service/jogo-service.service';


@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  rank; 

  constructor(private jogoServiceService: JogoServiceService) { }

  getRank(){
    this.jogoServiceService.getRank().subscribe(
      jogo => {
        this.rank = jogo;
      }, err =>{
        console.log('ERRO ao listar jogos')
      }
    ) 
  }

  ngOnInit(): void {
    this.getRank();
  }

  ngOnChange(): void{
    this.getRank();
  }
}
