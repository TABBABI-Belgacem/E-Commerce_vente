import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 exist
  constructor(private af:AngularFireAuth, private route:Router, private as:AuthService) {
    this.as.user.subscribe(user=>{
      if(user){
        this.exist=true
      }else{
        this.exist=false
      
      }
    })
   }

  ngOnInit(): void {
  }
  logout(){
    this.af.signOut().then(()=>{
      //console.log("success logout")
      localStorage.removeItem("userConnect")
      this.route.navigate(['/login'])
    }).catch(()=>{
      console.log("failed logout")

    })
}}
