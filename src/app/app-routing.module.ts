import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './pages/forms/forms.component';
import { FormtwoComponent } from './pages/formtwo/formtwo.component';
import { FormviewComponent } from './pages/formview/formview.component';
import { InmuebleComponent } from './vs/inmueble/inmueble.component';
import { VendedorspComponent } from './vs/vendedorsp/vendedorsp.component';
import { CompradorbComponent } from './vs/compradorb/compradorb.component';


const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},  
  {path:'inicio',component:FormsComponent},
  {path:'typevc',component:FormtwoComponent},
  {path:'info',component:FormviewComponent},
  {path:'inmueble',component:InmuebleComponent},
  {path:'vendedor-sp',component:VendedorspComponent},
  {path:'comprador-b',component:CompradorbComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
