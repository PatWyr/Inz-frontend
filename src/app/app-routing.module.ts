import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {UserProfileComponent} from "./auth/user-profile/user-profile.component";
import {HomeComponent} from "./home/home.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {CreateCertificationComponent} from "./certification/create-certification/create-certification.component";
import {ViewPostComponent} from "./post/view-post/view-post.component";
import {TestComponent} from "./test/test.component";


const routes: Routes = [
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-profile/:name', component: UserProfileComponent },
  { path: '', component: HomeComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'create-certification', component: CreateCertificationComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'generate-test', component: TestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
