import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CertificationResponse } from '../certification-response';
import { Router } from '@angular/router';
import { CertificationService } from '../certification.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-certification',
  templateUrl: './create-certification.component.html',
  styleUrls: ['./create-certification.component.css']
})
export class CreateCertificationComponent implements OnInit {

  createSubredditForm: FormGroup;
  certificationResponse: CertificationResponse;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private certificationService: CertificationService) {
    this.createSubredditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.certificationResponse = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubreddit() {
    this.certificationResponse.name = this.createSubredditForm.get('title')
      .value;
    this.certificationResponse.description = this.createSubredditForm.get('description')
      .value;
    this.certificationService.createCertification(this.certificationResponse).subscribe(() => {
      this.router.navigateByUrl('');
    })
  }

}
