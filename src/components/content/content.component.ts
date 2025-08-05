import { Component } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";
import { ServicosComponent } from "../servicos/servicos.component";
import { PagamentoComponent } from "../pagamento/pagamento.component";
import { MotivosComponent } from "../motivos/motivos.component";
import { OrcamentoComponent } from "../orcamento/orcamento.component";

@Component({
  selector: 'app-content',
  imports: [InicioComponent, ServicosComponent, PagamentoComponent, MotivosComponent, OrcamentoComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
