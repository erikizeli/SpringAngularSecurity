import {Component, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from "@angular/router";

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  constructor(private http: HttpClient,
              private router: Router) {
  }



  formData = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    role:''
  }

  register = async (
  ) => {

    const requestBody = {
      "firstname":this.formData.firstName,
      "lastname":this.formData.lastName,
      "email":this.formData.email,
      "password":this.formData.password,
      "role":this.formData.role
    }

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post("http://localhost:8080/api/v1/auth/register", requestBody, { headers } )
    .subscribe(
      response => {this.router.navigate([''])},
      error => {alert("Fill out mandatory fields")}
    )
  }
}
