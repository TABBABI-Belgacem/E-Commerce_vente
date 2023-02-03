import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Uid
  messageSuccess
dataarray
  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {
    this.fs.collection("products").snapshotChanges().subscribe((data)=>{
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
     commander(f){
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
}
