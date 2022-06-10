import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NovaPessoaComponent } from './nova-pessoa/nova-pessoa.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    NovaPessoaComponent,
    ListaPessoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [

    //{ provide: LOCALE_ID, useValue: 'pt' }, //Localizar data
    {
      //Localizando moeda
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
