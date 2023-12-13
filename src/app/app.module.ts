import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsComponent } from './pages/forms/forms.component';
import { FormtwoComponent } from './pages/formtwo/formtwo.component';
import { FormviewComponent } from './pages/formview/formview.component';
import { InmuebleComponent } from './vs/inmueble/inmueble.component';
import { VendedorspComponent } from './vs/vendedorsp/vendedorsp.component';
import { CompradorbComponent } from './vs/compradorb/compradorb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormsComponent,
    FormtwoComponent,
    FormviewComponent,
    InmuebleComponent,
    VendedorspComponent,
    CompradorbComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
