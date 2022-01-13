import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'image-progress-app';

  imageSource: string = '';
  i: number = 1;
  sources: string[] = [
    'https://images.unsplash.com/photo-1642045544498-ba9e7ffc1364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1642049888276-9c9f0a1a8758?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1642006953663-06f0387f5652?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  ]

  ngOnInit() {
    const subject = new Subject();

    subject.subscribe({
      next: (v) => this.imageSource = <string>v,
    });

    subject.next(this.sources[0]);
    setInterval(() => subject.next(this.sources[this.i++ % 3]), 3000);
  }

}
