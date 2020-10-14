import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tipo: String = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  alternaBotao(tipo: String){
    this.tipo = tipo;
    console.log(this.tipo)
  }
}
