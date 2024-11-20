
import { Component } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { contrato } from '../../models/contrato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-contrato',
  templateUrl: './crear-contrato.component.html',
  styleUrls: ['./crear-contrato.component.css'],
})
export class CrearContratoComponent {
  contrato: contrato = {
    identificador: '',
    valor: 0,
    nombreContratante: '',
    documentoContratante: '',
    nombreContratantista: '',
    documentoContratantista: '',
    fechaInicial: '',
    fechaFinal: '',
    id: 0
  };

  constructor(private contratoService: ContratoService) {}

  guardarContrato() {
    this.contratoService.createContrato(this.contrato).subscribe(() => {
      alert('Contrato creado con éxito');
    });
  }
}
