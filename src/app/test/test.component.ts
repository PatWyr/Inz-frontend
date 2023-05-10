import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../model/post-model";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() posts: PostModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
