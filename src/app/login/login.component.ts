import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  formLogin: FormGroup;

  constructor(private authService: AuthService,
    private router: Router)

  {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),

      password: new FormControl('', Validators.required)
    });
  }


  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formLogin.valid) {

    this.authService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => {
        console.log(error);
        alert("Error: Por favor, verifica tus credenciales e intenta nuevamente.");
      });
    }
      else {
        alert("Por favor, llena todos los campos correctamente.");
      }
  }

  // onClick() {
  //   this.authService.loginWithGoogle()
  //     .then(response => {
  //       console.log(response);
  //       this.router.navigate(['/main']);
  //     })
  //     .catch(error => console.log(error))
  // }

}
