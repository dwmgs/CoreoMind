import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  email: string = "";
  forgotSuccess: boolean;

  onSubmit(){
    //adicionar lógica para envio de email;
    this.forgotSuccess = true;
  }

}
