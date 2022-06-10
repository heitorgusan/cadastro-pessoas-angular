import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransmitirPessoasService {
  private listaPessoas: any[];
  constructor() {
    this.listaPessoas = [];
  }

  get getLista():any[]{
    return this.listaPessoas;
  }

  add(pessoa:any):void{
    this.hidratar(pessoa);
    this.listaPessoas.push(pessoa)
  }

  private hidratar(pessoa:any){
    pessoa.id = this.listaPessoas.length;
  }
}
