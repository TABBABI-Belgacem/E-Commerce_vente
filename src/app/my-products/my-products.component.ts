import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit ,OnDestroy{
Uid
messageSuccess
dataarray
getProducts:Subscription
  constructor( private fs:AngularFirestore, private as:AuthService) {
    this.as.user.subscribe(user=>{
      this.Uid=user.uid
    })
   }
  
  ngOnInit(): void {
    //Get data profil
    this.getProducts=this.fs.collection("products").snapshotChanges().subscribe((data)=>{
      this.dataarray=data.map(element=>{
        return   {
        id:element.payload.doc.id,
        title:element.payload.doc.data()['title'],
        description:element.payload.doc.data()['description'],
        image:element.payload.doc.data()['image'],
        uid:element.payload.doc.data()['uid'],
       
        
        }
      })
    })
  }
 addproduct(f){
let data=f.value
this.fs.collection("products").add({
  title:data.title,
  description:data.description,
  image:data.image,
  uid:this.Uid
}).then(()=>{
  this.messageSuccess='Product added !'
})
 }
 Delete(id){
  this.fs.collection("products").doc(id).delete()
 }
 Update(){
   
 }
 ngOnDestroy(){  //unsubscribe observable page 
  this.getProducts.unsubscribe()
    console.log("Unsubscribe")
 }
}
