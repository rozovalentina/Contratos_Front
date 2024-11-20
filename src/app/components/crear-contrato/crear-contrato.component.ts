import { Component } from '@angular/core';
import { ContratoService } from 'src/app/services/contrato.service';
import { Contrato } from 'src/app/models/contrato.model';

@Component({
  selector: 'app-crear-contrato',
  templateUrl: './crear-contrato.component.html',
  styleUrls: ['./crear-contrato.component.css'],
})
export class CrearContratoComponent {
  contrato: Contrato = {
    identificador: '',
    valor: 0,
    nombreContratante: '',
    documentoContratante: '',
    nombreContratantista: '',
    documentoContratantista: '',
    fechaInicial: '',
    fechaFinal: '',
  };

  constructor(private contratoService: ContratoService) {}

  guardarContrato() {
    this.contratoService.createContrato(this.contrato).subscribe(() => {
      alert('Contrato creado con éxito');
    });
  }
}
