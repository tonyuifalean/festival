import { Component, Input, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

export interface BlogPost {
  imageData: {
    url: string;
    title: string;
  },
  noOfParagraphs: number,
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  postDataPagragraphs!: number[];
  imageUrl!: string;
  imageTitle!: string;
  isLoading = true;

  @Input() postIndex!: number;
  @Input('postData')
  set postData(val: BlogPost) {
    this.postDataPagragraphs = Array.from({ length: val.noOfParagraphs }, (_, i) => i + 1);
    this.imageUrl = val.imageData.url;
    this.imageTitle = val.imageData.title;
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
