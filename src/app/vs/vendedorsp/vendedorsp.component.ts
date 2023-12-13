import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedorsp',
  templateUrl: './vendedorsp.component.html',
  styleUrls: ['./vendedorsp.component.css']
})
export class VendedorspComponent {


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
}
