import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {FormsComponent} from '../forms/forms.component'

@Component({
  selector: 'app-formtwo',
  templateUrl: './formtwo.component.html',
  styleUrls: ['./formtwo.component.css'],
  
})
export class FormtwoComponent {
  @ViewChild('miSelect') miSelect: ElementRef | undefined;
  @ViewChild('codCat') codCat: ElementRef | undefined;
  @ViewChild('nInm') nInm: ElementRef | undefined;
  @ViewChild('numero') numero: ElementRef | undefined;
  constructor( private formsComponent:FormsComponent, private router: Router) { }

  typeVisacion = '' ;
  codcat = false;
  ninm = false;
  Numero = '';
  
  obtenerValor() {
    if (this.miSelect && this.numero) {
      const valorSeleccionado = this.miSelect.nativeElement.value;
      this.typeVisacion = valorSeleccionado;
      this.Numero = this.numero.nativeElement.value;
      console.log(this.Numero);
      if(this.codCat && this.codCat.nativeElement.checked){
        this.codcat = true;
        console.log(this.codcat)
      }else if(this.nInm && this.nInm.nativeElement.checked){
        this.ninm = true;
        console.log(this.ninm)
      }

      if (this.Numero == "411740" || this.Numero == "01-042-00025-000") {
        
      }
      


    }
  }

}
