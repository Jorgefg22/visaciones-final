import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class FormsComponent {

  
  constructor(private router: Router) { }

   fur = '';
  clickme(DAdmicion: string) {
    if (DAdmicion == "2358125" || DAdmicion == "1646739" || DAdmicion == "5285376") {
      this.router.navigateByUrl('/typevc')
      this.fur = DAdmicion;
    } else {
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
      });
    }

  }
}
