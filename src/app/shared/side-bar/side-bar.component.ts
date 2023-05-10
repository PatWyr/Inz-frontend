import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCreatePost() {
    this.router.navigateByUrl('/create-post');
  }

  goToCreateSubreddit() {
    this.router.navigateByUrl('/create-certification');
  }

  goToGenerateTest() {
    this.router.navigateByUrl('/generate-test');
  }

  goToCertificationInformation() {
    window.open("https://aws.amazon.com/certification/", "_blank");
  }

  goToDocumentation() {
    window.open("https://docs.aws.amazon.com", "_blank");
  }

  goToTutorial() {
    window.open("https://learn.cantrill.io", "_blank");
  }

}
