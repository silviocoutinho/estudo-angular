import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  nome = 'Silvio';  
  idade = 10;
  ultimoId = 0;
  adicionado = false;
  @Output('criado') funcionarioAdicionado = new EventEmitter();
  

  getIdade(){
    return this.idade;
  }

  adicionar(){    
    this.adicionado = true;   

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }

  alterarNome(event: any){
    this.nome = event.target.value;
    if (this.nome.length == 0) {
      this.adicionado = false;
     
      
    }
  }


}
