import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../model/post-model";
import {faArrowUp, faArrowDown, faPlusSquare, faMinusSquare, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from "../../auth/shared/auth.service";
import {PostService} from "../post.service";
import {VoteType} from "./vote-type";
import {VotePayload} from "./vote-payload";
import {VoteService} from "../vote.service";

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  faQuestionCircle = faQuestionCircle;

  votePayload: VotePayload;

  upvoteColor: string;
  downvoteColor: string;

  constructor(
              private authService: AuthService,
              private postService: PostService,
  private voteService: VoteService) {

    this.votePayload = {
      voteType: undefined,
      postId: undefined
    }
  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.upvoteColor = 'green';
    this.downvoteColor = '';
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
    this.downvoteColor = 'red';
  }

  private vote() {
    this.votePayload.postId = this.post.id;
    this.voteService.vote(this.votePayload).subscribe(() => {
      this.updateVoteDetails();
    })
  }


  private updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
    });
  }

}
