import { TransmitirPessoasService } from './../services/transmitir-pessoas.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector:'app-lista-pessoa',
  templateUrl:'./lista-pessoa.component.html',
  styleUrls:['./lista-pessoa.component.css']
})

export class ListaPessoaComponent implements OnInit{
  listaPessoas: any[] = [];

  constructor(private service:TransmitirPessoasService){}


  ngOnInit(): void{
    this.listaPessoas = this.service.getLista;
  }
}
