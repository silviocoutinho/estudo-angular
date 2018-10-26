import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

  //O nome dentro do parenteses, eh o apelido para usar fora do componente
  @Input('func') funcionario: any; //torna funcionario publico, por padrao eh privado


}
