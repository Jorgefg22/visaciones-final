import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import {Map, marker, polygon, tileLayer } from 'leaflet';
import { Router } from '@angular/router';
import { FormtwoComponent } from 'src/app/pages/formtwo/formtwo.component';


@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class InmuebleComponent implements OnInit {
  static updateinformation(Numero: string, matcomp: string, asiento: string, supterrcat: string, constr: string, supterruat: string, constad: string, tipe: string, area: string, inclinacion: string, servicios: string) {
    throw new Error('Method not implemented.');
  }
   
  @ViewChild('codcat', { static: true }) codcat!: ElementRef;
  @ViewChild('matcomp', { static: true }) matcomp!: ElementRef;
  @ViewChild('asiento', { static: true }) asiento!: ElementRef;
  @ViewChild('suptercat', { static: true }) suptercat!: ElementRef;
  @ViewChild('constr', { static: true }) constr!: ElementRef;
  @ViewChild('supteruat', { static: true }) supteruat!: ElementRef;
  @ViewChild('constrat', { static: true }) constrat!: ElementRef;
  @ViewChild('tipo', { static: true }) tipo!: ElementRef;
  @ViewChild('area', { static: true }) area!: ElementRef;
  @ViewChild('incli', { static: true }) incli!: ElementRef;
  @ViewChild('serv', { static: true }) serv!: ElementRef;
  @ViewChild(FormtwoComponent) formtwo!: FormtwoComponent;
  //@ViewChild('mylabel', { static: true })
  //mylabel!: ElementRef;

 
  constructor(private formTwo: FormtwoComponent,private router: Router) { }

  ngOnInit(){
    console.log(this.formTwo.gettest())
    //this.updateinformation(this.formTwo.Numero,this.formTwo.matcomp,this.formTwo.asiento,this.formTwo.supterrcat,this.formTwo.constr,this.formTwo.supterruat,this.formTwo.constad,this.formTwo.tipe,this.formTwo.area, this.formTwo.inclinacion, this.formTwo.servicios);
  }


  updateinformation(codigoCat:string, matcomp:string,asiento:string,suptercat:string, constru:string,supteruat:string, constrat:string, tipo:string,area:string,incli:string,serv:string){

    
    this.codcat.nativeElement.innerText = codigoCat; 
    this.matcomp.nativeElement.innerText = matcomp;
    this.asiento.nativeElement.innerText = asiento;
    this.suptercat.nativeElement.innerText = suptercat;
    this.constr.nativeElement.innerText = constru,
    this.supteruat.nativeElement.innerText = supteruat;
    this.constrat.nativeElement.innerText = constrat;
    this.tipo.nativeElement.innerText = tipo;
    this.area.nativeElement.innerText = area;
    this.incli.nativeElement.innerText = incli;
    this.serv.nativeElement.innerText = serv;
  }

  redirecToPageinmueble(){
    this.router.navigateByUrl('/inmueble')
  }

  redirecToPageVendedor(){
    this.router.navigateByUrl('/vendedor-sp')
  }

  redirecToPageComprador(){
  this.router.navigateByUrl('/comprador-b')
  }


  ngAfterViewInit(): void {
    const map = new Map('map').setView([-17.403868804926827, -66.03924367573562], 18);
     tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       maxZoom: 19,
       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
     }).addTo(map);
 
     const markeritem = marker([-17.403868804926827, -66.03924367573562]).addTo(map).bindPopup("Gobierno Autonomo Municipal \n       SACABA");
     const polygonitem = polygon([
       [-17.403911151326625, -66.0391448417798],
       [-17.404098337375398, -66.03921023067011],
       [-17.40405380573603, -66.03948921569723],
       [-17.403872311394846, -66.03938776261947]
     ]).addTo(map).bindPopup('<nav class="navbar navbar-expand-lg navbar-light  p-3" style="background-color: #08477b ;"><div class="container-fluid"><a class="navbar-brand" href="#"><img src="../../../assets/logos/logo-sacaba.png" alt=""></a></div></nav><div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="../../../assets/img/teatro.jpg" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="../../../assets/img/boulebard.jpg" class="d-block w-100" alt="..."></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div><div><p>El GAMS es una Entidad Territorial Autónoma Metropolitana que impulsa el desarrollo económico local, humano y territorial a través de la prestación de servicios públicos a la población urbana y rural para contribuir al vivir bien, basados en los principios de democracia y equidad de sus políticas públicas.</p></div>');
     
   //  map.fitBounds([]);
   }    
   

}
