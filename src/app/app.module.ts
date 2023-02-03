import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProfilComponent,
    ProductsComponent,
    RegisterComponent,
    MyProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
