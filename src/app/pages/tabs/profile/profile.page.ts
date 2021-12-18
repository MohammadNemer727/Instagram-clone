import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  slideOpts = {};
  stories: any[] = [];
  buttonValue = 'grid';
  buttonItems: any[] = [];
  posts: any[] = [];
  constructor() { }

  ngOnInit() {
    this.stories = [
      { name: 'New' },
      { name: 'Android', src: 'https://picsum.photos/200/300' },
      { name: 'Angular', src: 'https://picsum.photos/200/300' },
      { name: 'Ionic', src: 'https://picsum.photos/200/300' },
      { name: 'Nodejs', src: 'https://picsum.photos/200/300' },
      { name: 'Laravel', src: 'https://picsum.photos/200/300' },
      { name: 'IOS', src: 'https://picsum.photos/200/300' },
      { name: 'Php', src: 'https://picsum.photos/200/300' },
    ];
    this.slideOpts = {
      slideShadows: true
    };
    this.buttonItems = [
      {value: 'grid', icon: 'grid'},
      {value: 'reels', icon: 'film'},
      {value: 'photos', icon: 'images'},
    ];
    this.posts = [
      { id: 1, url: 'https://picsum.photos/200/300'},
      { id: 2, url: 'https://picsum.photos/200/300'},
      { id: 3, url: 'https://picsum.photos/200/300'},
      { id: 4, url: 'https://picsum.photos/200/300'},
      { id: 9, url: 'https://picsum.photos/200/300'},
      { id: 6, url: 'https://picsum.photos/200/300'},
      { id: 5, url: 'https://picsum.photos/200/300'},
      { id: 8, url: 'https://picsum.photos/200/300'},
      { id: 7, url: 'https://picsum.photos/200/300'},
      { id: 10, url: 'https://picsum.photos/200/300'},
      { id: 11, url: 'https://picsum.photos/200/300'},
      { id: 12, url: 'https://picsum.photos/200/300'},
    ];
  }

}
