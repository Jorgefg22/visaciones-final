import { Component, ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsComponent } from '../forms/forms.component'
import { InmuebleComponent } from 'src/app/vs/inmueble/inmueble.component';
 

@Component({
  selector: 'app-formtwo',
  templateUrl: './formtwo.component.html',
  styleUrls: ['./formtwo.component.css'],

})
@Injectable({
  providedIn: 'root'
})
export class FormtwoComponent {
  @ViewChild('miSelect') miSelect: ElementRef | undefined;
  @ViewChild('codCat') codCat: ElementRef | undefined;
  @ViewChild('nInm') nInm: ElementRef | undefined;
  @ViewChild('numero') numero: ElementRef | undefined;
  @ViewChild(InmuebleComponent) inmueble!: InmuebleComponent;
 
  constructor( private formsComponent: FormsComponent, private router: Router) { 
     
  }

  typeVisacion = '';
  codcat = false;
  ninm = false;
  Numero = '';
  test = 'El valor se cambio';


  //nombres       //apellidos       //documeno identificacion     // tipo de documento     //expedicion     // genero
  nombre1 = " ";  apellido1 = "";    dni1 = "";                   tdoc = "";               exp1 = "";       gen1 ="";

  //tipo contribuyente       //fecha nacimiento      //domicilio legal    //pmc         //estado civil 
  tpct1 = "";               fechanac1 = "";          domleg1 = "";        pmc1 = "";    estciv1 = "";
  //datos tecnicos
  //Matricula computarizada   //asiento     //sup.Terreno/cat     //construcciones    //clase     //tipo      //material via
  matcomp = "";               asiento = "";  supterrcat =" 12";         constr = "" ;       clas = "";   tipe = "" ; matvia = "";
  
   //sup. Terreno/ruat   //construc. adicion.     //Area      //inclinacion        //servicios            //zona tributaria
   supterruat = "";      constad = "";            area ="";    inclinacion = "" ;       servicios = "";     zntrib = ""
  

  gettest(){

    return this.supterrcat;

  }

  obtenerValor() {
    if (this.miSelect && this.numero) {
      const valorSeleccionado = this.miSelect.nativeElement.value;
      this.typeVisacion = valorSeleccionado;
      this.Numero = this.numero.nativeElement.value;
      console.log(this.Numero);
      if (this.codCat && this.codCat.nativeElement.checked) {
        this.codcat = true;
        console.log(this.codcat)
      } else if (this.nInm && this.nInm.nativeElement.checked) {
        this.ninm = true;
        console.log(this.ninm)
       
      }

      if (this.Numero == "411740" || this.Numero == "01-042-00025-000") {
       
        this.nombre1 = "MARTIN";
        this.apellido1 = "ROQUE TINTAYA";
        this.dni1 = "2359988";
        this.tdoc = "CEDULA DE IDENTIDAD" ; 
        this.tpct1 = "NATURAL";
        this.fechanac1 = "03/11/1957";
        this.domleg1 = "CALLE INNOMINADA S/N, DISTRITO SACABA";
        this.pmc1 = "2359988019";
        this.exp1 = "LA PAZ";
        this.estciv1 = "SOLTERO";
        this.gen1 = "MASCULINO";
        this.matcomp = "3.10.101.0013099";
        this.asiento = "A-4";
        this.supterrcat = "113";
        this.constr = "1";
        this.clas = "VIVIENDA UNIFAMILIAR";
        this.tipe = "UNICA";
        this.matvia = "CEMENTO";
        this.supterruat = "113";
        this.constad = "1";
        this.area = "URBANO";
        this.inclinacion = "PLANO";
        this.servicios = "AGUA, LUZ,TELEFONO, ALCANTARILLADO";
        this.zntrib = "ZONA2";

        console.log(this.supterrcat)

        this.router.navigateByUrl('/inmueble')
       

      } else if (this.Numero == "392649" || this.Numero == "03-018-00009-000") {

       
        this.nombre1 = "JUAN";
        this.apellido1 = "GUTIERREZ ESPINOZA";
        this.dni1 = "951500";
        this.tdoc = "CEDULA DE IDENTIDAD" ; 
        this.tpct1 = "NATURAL";
        this.fechanac1 = "27/01/1942";
        this.domleg1 = "CALLE AROMA #6, DISTRITO 1 SACABA (URBANA)";
        this.pmc1 = "961500016";
        this.exp1 = "COCHABAMBA";
        this.estciv1 = "VIUDO(A)";
        this.gen1 = "MASCULINO";
        this.matcomp = "3.10.1.01.0054807";
        this.asiento = "A-10";
        this.supterrcat = "1705";
        this.constr = "0";
        this.clas = "TERRENO";
        this.tipe = "UNICA";
        this.matvia = "PIEDRA";
        this.supterruat = "1705";
        this.constad = "0";
        this.area = "URBANO";
        this.inclinacion = "PLANO";
        this.servicios = "AGUA, LUZ, TELEFONO, ALCANTARILLADO";
        this.zntrib = "ZONA3";


        this.router.navigateByUrl('/inmueble')

      } else if (this.Numero == "389651" || this.Numero == "07-066-00022-000") {
        this.nombre1 = "MARIA";
        this.apellido1 = "PACCI CANAZA Vda. de HUANCA";
        this.dni1 = "3129066";
        this.tdoc = "CEDULA DE IDENTIDAD" ; 
        this.tpct1 = "NATURAL";
        this.fechanac1 = "14/09/1938";
        this.domleg1 = "CALLE INNOMINADA S/N, DISTRITO LINDE";
        this.pmc1 = "3129066016";
        this.exp1 = "COCHABAMBA";
        this.estciv1 = "VIUDO (A)";
        this.gen1 = "FEMENINO";
        this.matcomp = "3.10.1.01.0054807";
        this.asiento = "A-4";
        this.supterrcat = "1962";
        this.constr = "1";
        this.clas = "VIVIENDA UNIFAMILIAR";
        this.tipe = "UNIA";
        this.matvia = "AZFALTO";
        this.supterruat = "1962";
        this.constad = "1";
        this.area = "URBANO";
        this.inclinacion = "PLANO";
        this.servicios = "AGUA, LUZ, TELEFONO,ALCANTARILLADO";
        this.zntrib = "ZONA5";
        this.router.navigateByUrl('/inmueble')

      }

    }
  }

  asignarValores(){
   
   
    this.inmueble.updateinformation(this.Numero,this.matcomp,this.asiento,this.supterrcat,this.constr,this.supterruat,this.constad,this.tipe, this.area,this.inclinacion,this.servicios)
    
  }
}
