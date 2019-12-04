import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cursos-grid',
  templateUrl: './cursos-grid.component.html',
  styleUrls: ['./cursos-grid.component.css']
})
export class CursosGridComponent {

  @Input() cursos = [];

}
