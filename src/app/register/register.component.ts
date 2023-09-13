import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formReg: FormGroup;


  constructor(private authService: AuthService,
    private router: Router)
  {
    // this.formReg = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl()
    // })
    this.formReg = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  

  onSubmit() {
    if (this.formReg.valid) {
      this.authService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
    }
    
    else {
      alert("Por favor, llena todos los campos correctamente.");
    }
  }

}
