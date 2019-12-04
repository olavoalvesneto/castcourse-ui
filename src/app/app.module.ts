import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { CursosPesquisaComponent } from './cursos-pesquisa/cursos-pesquisa.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { MessageComponent } from './message/message.component';
import { CursosGridComponent } from './cursos-grid/cursos-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosPesquisaComponent,
    CursoCadastroComponent,
    MessageComponent,
    CursosGridComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
