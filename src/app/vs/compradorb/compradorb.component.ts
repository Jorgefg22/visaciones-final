import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-compradorb',
  templateUrl: './compradorb.component.html',
  styleUrls: ['./compradorb.component.css']
})
export class CompradorbComponent {

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

  openmodalPMC(){
    
  }
}
