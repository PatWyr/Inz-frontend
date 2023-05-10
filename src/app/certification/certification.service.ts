import { Injectable } from '@angular/core';
import {CertificationResponse} from "./certification-response";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) { }

  createCertification(subredditModel: CertificationResponse): Observable<CertificationResponse> {
    return this.http.post<CertificationResponse>('http://localhost:8080/api/v1/certification/create-certification',
      subredditModel);
  }

  getAllCertifications(): Observable<Array<CertificationResponse>> {
    return this.http.get<Array<CertificationResponse>>('http://localhost:8080/api/v1/certification/list-certifications');
  }
}
