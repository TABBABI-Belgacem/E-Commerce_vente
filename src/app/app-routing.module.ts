import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { ProductsComponent } from './products/products.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/guard/authGuard.service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'profil',component:ProfilComponent,canActivate:[AuthGuardService]},
{path:'products',component:ProductsComponent,canActivate:[AuthGuardService]},
{path: 'my-products',component:MyProductsComponent,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
