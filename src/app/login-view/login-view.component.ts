
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  username: string;
  password: string;
  error: any;
  valid: any;
  constructor(private api: ApiService, private router: Router) { }

  login() {
    const { username, password } = this;
    if (this.username.trim() !== '' && password.trim() !== '') {
      this.api.
        login(username.trim(), password.trim())
        .then((response:any) => {
          console.log(response);
        if(response.status===400){
          this.error= response.error;
          this.username='';
          this.password='';
        }else{
          this.router.navigate(['/jira']);
        console.log("id a guardar: "+response.user_id);
        localStorage.setItem('id',response.user_id);
        }
        
        })
        .catch(error => {
          console.log('cach', error);

          this.error = error;
        });
        this.password='';
        this.username='';
    }
  }

}
