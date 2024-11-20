import { Component, OnInit } from '@angular/core';
import { ContratoService } from 'src/app/services/contrato.service';
import { Contrato } from 'src/app/models/contrato.model';

@Component({
  selector: 'app-listar-contratos',
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.css'],
})
export class ListarContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.contratoService.getContratos().subscribe((data) => {
      this.contratos = data;
    });
  }
}
