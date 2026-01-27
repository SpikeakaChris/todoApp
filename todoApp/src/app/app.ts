import { Component, signal } from '@angular/core';
import { Header,} from './header/header';
import { Navbar } from './navbar/navbar';
import { Mainnav } from './mainnav/mainnav';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Mainnav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todoApp');
}
