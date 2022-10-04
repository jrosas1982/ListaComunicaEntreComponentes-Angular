import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleado: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Rosas', sexo: 'Masculino', salario: 300000 },
    { legajo: 2, nombre: 'Julian', apellido: 'Candelice', sexo: 'Masculino', salario: 900000 },
    { legajo: 3, nombre: 'Javier', apellido: 'Romero', sexo: 'Masculino', salario: 66000 },
    { legajo: 4, nombre: 'Ariana', apellido: 'Rosales', sexo: 'Femenino', salario: 600000 },
    { legajo: 5, nombre: 'Antonio', apellido: 'Rios', sexo: 'Masculino', salario: 300000 },
    { legajo: 6, nombre: 'Mark', apellido: 'Antoni', sexo: 'Masculino', salario: 303450 },
    { legajo: 7, nombre: 'Elvis', apellido: 'Crespo', sexo: 'Masculino', salario: 984500 },
  ];
  radioSelected = 'Todos';
  total: number;
  totalMascu = 3;
  totalFem = 2;

  constructor() {
    this.total = this.GetTotal();
  }

  ngOnInit(): void {
    this.total = this.GetTotal();
  }
  contarSegunSexo() {

  }
  contarFemenino(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Femenino').length;
  }
  contarMasculino(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Masculino').length;
  }
  GetTotal(): number {
    return this.listEmpleado.length;
  }
  empleadoCountChg(btnRadioSelected: string): void {
    this.radioSelected = btnRadioSelected;
  }
}
