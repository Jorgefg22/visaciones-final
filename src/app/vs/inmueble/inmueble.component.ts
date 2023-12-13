import { Component } from '@angular/core';
import {Map, marker, polygon, tileLayer } from 'leaflet';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})

export class InmuebleComponent {


  constructor(private router: Router) { }

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
     
     map.fitBounds([
     ]);
   }    
}
