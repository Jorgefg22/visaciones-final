import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = this.formBuilder.group({
    user: ['catastro2023', [Validators.required]],
    password: ['GAMS', [Validators.required]],
  })
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    if (this.loginform.valid) {
      console.log("llamar al servicio de login")
      this.router.navigateByUrl('/review')
    } else {
      alert("error")
    }
  }
  get userdata() {

    return this.loginform.controls.user;
  }

  get passwddata() {

    return this.loginform.controls.password;
  }


}