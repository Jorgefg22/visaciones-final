import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './pages/forms/forms.component';
import { FormtwoComponent } from './pages/formtwo/formtwo.component';
import { FormviewComponent } from './pages/formview/formview.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},  
  {path:'inicio',component:FormsComponent},
  {path:'typevc',component:FormtwoComponent},
  {path:'info',component:FormviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
