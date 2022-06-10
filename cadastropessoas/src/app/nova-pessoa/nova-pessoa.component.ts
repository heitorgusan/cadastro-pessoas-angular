import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-pessoa',
  templateUrl: './nova-pessoa.component.html',
  styleUrls: ['./nova-pessoa.component.css'],
})

export class NovaPessoaComponent {

  @Output () EventTransmitirPessoa =  new EventEmitter<any>();

  nome : string | undefined;
  idade: number | undefined;
  salario: number | undefined;

  transmitirPessoa(): void{
    const pessoaEmitida = {nome: this.nome , idade : this.idade, salario: this.salario};
    this.EventTransmitirPessoa.emit(pessoaEmitida);
  }

}
