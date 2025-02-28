import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  loginError: boolean;

  constructor(
    private service: AuthService,
    private router: Router
  ){}

  onSubmit(){
    //aqui aplicar toda logica de validação. Utilizar o loginError para sinalizar erro ao usuário.
    this.router.navigate(["/client/lobby"])
  }
}
