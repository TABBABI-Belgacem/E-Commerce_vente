import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageError
  constructor(private sa:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
  login(f){
    //console.log(f.value)
    let data=f.value
    this.sa.signin(data.email,data.password).then((user)=>{
      //console.log(" success signin ")
      this.route.navigate(["/"])
      localStorage.setItem("userConnect",user.user.uid)
    }).catch(()=>{
      //console.log("login failed")
      this.messageError="Incorrect email and password "
    })
  }
}

