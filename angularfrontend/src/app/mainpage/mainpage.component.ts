import { Component, NgModule, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ContainerComponent } from '../container/container.component';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {


  user: String[] = []
  manager: String[] = []
  admin: String[] = []

  constructor(
    private router: Router,
    private http: HttpClient
    ) 
    {
      
  }

  ngOnInit(): void {
    this.getData()
  }

  addData = async (text: string, auth: string) => {
    const token:any = localStorage.getItem("token")
    const headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization",`Bearer ${token}`);

    let thisrole

    if (auth == 'admin'){
      thisrole = 2
      
    } else if (auth == 'management'){
      thisrole = 1
      
    } else {
      thisrole = 0
    }

    console.log("auth: " + auth)

    const reqBody = {
      "email":localStorage.getItem('email'),
      "role":thisrole,
      "text":text
    }

    

    this.http.post(`http://localhost:8080/api/v1/${auth}/post`,reqBody, { headers }).subscribe(
      (response) => {

        console.log(response)
        if (auth == 'admin'){
          this.admin.push(text)
        } else if (auth == 'management'){
          this.manager.push(text)
        } else {
          this.user.push(text)
        }
      },
      error => {
        alert("You don't have authority to interract with that field")
        
      }
    )
  }

  

  getData = async () => {
    const token:any = localStorage.getItem("token")
    const headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization",`Bearer ${token}`).set("Access-Control-Allow-Origin", "*");

    const reqBody = {
      "email":localStorage.getItem('email')
    }

    this.http.post("http://localhost:8080/api/v1/user/get",reqBody,{ headers }).subscribe(
      (response: any) => {
        
        const user = response.messageMap[1].text
        const manager = response.messageMap[2].text
        const admin = response.messageMap[3].text
        user.forEach((element:any) => {
          this.user.push(element)
        });
        
        manager.forEach((element:any) => {
          this.manager.push(element)
        });

        admin.forEach((element:any) => {
          this.admin.push(element)
        });
      },
      error => {
        console.log(error)
      }
    )
  }
  

  logout = async () => {

    const token:any = localStorage.getItem("token")
    const headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization",`Bearer ${token}`);
    this.http.get("http://localhost:8080/api/v1/auth/logout",{ headers }).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )

    localStorage.setItem("loggedIn","false")
    localStorage.removeItem("email")
    localStorage.removeItem("token")
    this.router.navigate(["/login"])
  }
}
