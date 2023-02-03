import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit ,OnDestroy{
Uid
unsubscribe:Subscription
dataprofile={
  flName:'',
  image:'',
  uid:''
}
successupdate
percentage
task:AngularFireUploadTask
ref:AngularFireStorageReference
  constructor(private as:AuthService, private fs:AngularFirestore , private fst:AngularFireStorage) {
    this.unsubscribe=this.as.user.subscribe((user)=>{
      this.Uid=user.uid
    })
   }

  ngOnInit(): void {
    this.fs.collection("users").ref.doc(localStorage.getItem("userConnect")).get().then((data)=>{
      console.log(data.data())
      this.dataprofile.flName=data.data()['flName']
      this.dataprofile.image=data.data()['image']
      this.dataprofile.uid=localStorage.getItem("userConnect")
      })
    }
    update(){
      this.fs.collection("users").doc(this.dataprofile.uid).update({
          flName:this.dataprofile.flName,
      }).then(()=>{
       this.successupdate="Updated!"
       window.location.reload()
      })
    }
    uploadimage(event){
      const id=Math.random().toString(36).substring(2)
      this.ref=this.fst.ref(id)
      this.task=this.ref.put(event.target.files[0])
      this.percentage=this.task.percentageChanges()
      this.task.then((data)=>{
        data.ref.getDownloadURL().then(url=>{
          this.fs.collection("users").doc(this.dataprofile.uid).update({
           
            image:url,
           
          })
        })
      })
    }
    ngOnDestroy(){
      this.unsubscribe.unsubscribe()
        console.log("user unsubscribe"
      )
    }
  }


