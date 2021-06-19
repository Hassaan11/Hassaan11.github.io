import { courseService } from './courses.service';
// declare module 'twit';
import { Component, OnInit } from '@angular/core';
// import * as fs from 'fs';
import { FacebookModule } from 'ngx-facebook';
import { FacebookService, InitParams } from 'ngx-facebook';
import { UIParams, UIResponse } from 'ngx-facebook';
import { OAuth } from 'oauth';
// import { Twitter } from 'twit';
// import TwitterApi from 'twitter-api-v2';
// const Twitter = require('twit');
// declare const Twitter: any;
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: any;

  constructor(service: courseService, private fb: FacebookService) {
    this.courses = service.getCourses();
    console.log(this.courses);
    const initParams: InitParams = {
      appId: '530540961418430',
      xfbml: true,
      version: 'v11.0',
    };

    fb.init(initParams);
  }

  ngOnInit(): void {}
  share(event: any) {
    console.log(event);
    let data = event.path[1];
    let title = data.children[1].children[2].innerHTML;
    // console.log(data);

    const params: UIParams = {
      // href: 'https://github.com/zyra/ngx-facebook',

      href: 'https://google.com',
      method: 'share',
      hashtag: '#post',
      quote: title,
    };

    this.fb
      .ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }
  shareTwitter(event: any) {
    console.log(event);
    let data = event.path[1];
    let title = data.children[1].children[2].innerHTML;
    let arr = title.split(' ');
    let s = '';
    arr.map((element: any) => {
      s += element + '%20';
    });
    let s1 = '';
    for (let i = 0; i < arr.length; i++) {
      if (i + 1 != arr.length) {
        s1 += arr[i] + '%20';
      } else {
        s1 += arr[i];
      }
    }

    window.open('https://twitter.com/compose/tweet?text=' + s1, '_blank');
    // const client = new Twitter({
    //   consumer_key: 'IRJdU0PBReKxaBdTBd82zNLSd',
    //   consumer_secret: 'eA2v9O8jI7I8gomG9V8agBh6E6h0EjdWN4p9E6JAmnBac8xkyR',
    //   access_token: '1205156547493613570-FlpZJZ6BChUznABO7rBEcN9vOp2Qrk',
    //   access_token_secret: 'kqDj9OxJiqH8nPK3xY04OARBS0x3uZmhtTlQa7EXHiCJM',
    // });
    // let tweet: any = { status: 'Hello world' };
    // client
    //   .post(`statuses/update`, tweet)
    //   .then((timeline: any) => {
    //     console.log(timeline);
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });
  }
}
