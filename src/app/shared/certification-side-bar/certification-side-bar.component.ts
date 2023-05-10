import { Component, OnInit } from '@angular/core';
import {CertificationService} from "../../certification/certification.service";
import {CertificationResponse} from "../../certification/certification-response";

@Component({
  selector: 'app-certification-side-bar',
  templateUrl: './certification-side-bar.component.html',
  styleUrls: ['./certification-side-bar.component.css']
})
export class CertificationSideBarComponent implements OnInit {

  certifications: Array<CertificationResponse> = [];

  constructor(private certificationService: CertificationService) {
    this.certificationService.getAllCertifications().subscribe(data => {
        this.certifications = data;
    });
  }

  ngOnInit(): void {
  }

}
