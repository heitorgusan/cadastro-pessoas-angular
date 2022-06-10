import { TransmitirPessoasService } from './services/transmitir-pessoas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastropessoas';

  constructor(private service : TransmitirPessoasService){

  }

  receberPessoa($event: any){
    this.service.add($event);
  }
}
