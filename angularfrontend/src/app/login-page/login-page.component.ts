import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private http: HttpClient,
  private router: Router) {
  }

  formData = {
    email:'',
    password:''
  }

  login = async (
  ) => {

    const requestBody = {
      "email": this.formData.email,
      "password": this.formData.password
    }


    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post("http://localhost:8080/api/v1/auth/authenticate", requestBody, {headers})
      .subscribe(
        async (response:any) => {
          const token = response.token;
          localStorage.setItem("token",token)
          localStorage.setItem('loggedIn','true')
          localStorage.setItem('email',this.formData.email)
          this.router.navigate(["/main"])
        },
        error => {
          alert("Invalid email or password")
        }
      )
  }
}
