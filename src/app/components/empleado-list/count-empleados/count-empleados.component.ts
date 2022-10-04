import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  @Input() todos : number;
  @Input() masculinos : number;
  @Input() femeninos : number;

  @Output() radioSelectedChange = new EventEmitter<string>();
   constructor() {
    this.todos = 0;
    this.femeninos=0;
    this.masculinos =0;
   }
  radioSelected = 'Todos';
  ngOnInit(): void {
  }

  radioBtnChange() : void{
  this.radioSelectedChange.emit(this.radioSelected);

  }
}
