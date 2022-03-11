import { Component, OnInit } from '@angular/core';

import { BlogPost } from './subcomponents/blog-post/blog-post.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  panelOpenState = false;
  isLoading = true;

  /** Represents the list of blog posts with their number of paragraphs. */
  blogPostList: BlogPost[] = [{
    imageData: {
      url: "assets/images/sighisoara-sunset.jpeg",
      title: "Sighisoara Sunset"
    },
    noOfParagraphs: 8
  }];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
