import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PostService} from "../../shared/post.service";
import {CreatePostPayload} from "./create-post.payload";
import {CertificationResponse} from "../../certification/certification-response";
import {CertificationService} from "../../certification/certification.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  certifications: Array<CertificationResponse>;

  constructor(private router: Router, private postService: PostService, private certificationService: CertificationService) {
    this.postPayload = {
      postName: '',
      description: '',
      certificationName: '',
      isQuestion: false
    }

  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.certificationName = this.createPostForm.get('certificationName').value;
    this.postPayload.description = this.createPostForm.get('description').value;
    this.postPayload.isQuestion = this.createPostForm.get('checkbox').value;
    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      certificationName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      checkbox: new FormControl(false, Validators.required)
    });
    this.certificationService.getAllCertifications().subscribe((data) => {
      this.certifications = data;
    });
  }

}
