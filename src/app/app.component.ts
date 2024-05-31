import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { URL } from 'whatwg-url';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'downlevel-issue';
  url: URL;
  constructor() {
    this.url = new URL('www.google.com');
  }
}
