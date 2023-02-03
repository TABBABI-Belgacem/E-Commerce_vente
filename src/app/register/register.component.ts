import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private sa:AuthService , private route:Router , private firestore:AngularFirestore) { }

  ngOnInit(): void {
  }
register(f){
  //console.log(f.value)
  let data=f.value
  this.sa.signup(data.email,data.password).then((user)=>{
    localStorage.setItem("userConnect",user.user.uid)
    this.firestore.collection("users").doc(user.user.uid).set({
      flName:data.flName,
      email:data.email,
      uid:user.user.uid,
      image:"assets\anonym.jpg"
    }).then (()=>{
      alert ("Registration Succesfull")
      //console.log("Success SIGNUP")
      this.route.navigate(['/'])
    })
    
   }).catch(()=>{
    alert ("Registration Failed")
     //console.log("Registration Failed")
   })
    
    
}
}
