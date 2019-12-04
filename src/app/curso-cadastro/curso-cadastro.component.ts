import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent {

  categorias = [
    { label: 'Comportamental', value: 1},
    { label: 'Programação', value: 2},
    { label: 'Qualidade', value: 3},
    { label: 'Processos', value: 4},

  ];

}
