import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { contrato } from '../../models/contrato';
@Component({
  selector: 'app-listar-contratos',
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.css'],
})
export class ListarContratosComponent implements OnInit {
  contratos: contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.contratoService.getContratos().subscribe((data) => {
      this.contratos = data;
    });
  }
}
