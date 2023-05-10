import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../shared/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../login/login-response.payload";
import {Observable} from "rxjs";
import {LoginRequestPayload} from "../login/login-request.payload";
import {SignupRequestPayload} from "../signup/singup-request.payload";
import {NONE_TYPE} from "@angular/compiler";
import { CertificationRequest } from './certification-request';
import {PostModel} from "../../model/post-model";



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name: string;
  certificationRequest: CertificationRequest;
  certificationForm: FormGroup;
  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router,private httpClient: HttpClient) {
    this.name = this.activatedRoute.snapshot.params.name;
    this.certificationRequest = {
      certificationId: ''
    };
  }

  ngOnInit(): void {
    this.certificationForm = new FormGroup({
      certification: new FormControl('', Validators.required)
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
    this.reloadPage()
  }

  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

  sendResponse() {
    this.certificationRequest.certificationId = this.certificationForm.get('certification').value;
    this.httpClient.post('http://localhost:8080/api/v1/user/user-verification', this.certificationRequest, { responseType: 'text' }).subscribe();
  }

}
