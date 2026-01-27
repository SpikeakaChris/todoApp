import { Component, signal } from '@angular/core';
import { Header,} from './header/header';
import { Navbar } from './navbar/navbar';
import { Mainnav } from './mainnav/mainnav';
import { Information } from "./information/information";

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Mainnav, Information],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todoApp');
}
