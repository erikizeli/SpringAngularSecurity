import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  

  formData = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    role:''
  }

  onSubmit(){
    console.log(this.formData)
  }

  constructor(private http: HttpClient,
    private httpheader: HttpHeaders) {}

  register = async (
  ) => {
    
    const requestBody = {
      'id':1,
      'text':'test'
    } 

    const headers = this.httpheader.set('Content-Type', 'application/json');

    this.http.post("https://api.example.com/endpoint", requestBody, { headers } )
    .subscribe(
      response => {console.log(response)},
      error => {console.log('Error: ', error)}
    )
  }
}
