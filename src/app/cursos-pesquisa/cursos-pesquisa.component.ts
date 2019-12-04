import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-pesquisa',
  templateUrl: './cursos-pesquisa.component.html',
  styleUrls: ['./cursos-pesquisa.component.css']
})
export class CursosPesquisaComponent {
  cursos = [
    { descricao: 'Curso OO JAVA 01', dataInicio: '04/12/2019', dataTermino: '05/12/2019',
      quantidadeAluno: 20, categoria: 'Programação' },
    { descricao: 'Curso OO JAVA 02', dataInicio: '06/12/2019', dataTermino: '07/12/2019',
      quantidadeAluno: 20, categoria: 'Programação' },
    { descricao: 'Curso OO JAVA 03', dataInicio: '08/12/2019', dataTermino: '09/12/2019',
      quantidadeAluno: 20, categoria: 'Programação' },
    { descricao: 'Curso OO JAVA 04', dataInicio: '10/12/2019', dataTermino: '11/12/2019',
      quantidadeAluno: 20, categoria: 'Programação' }
  ];
}
