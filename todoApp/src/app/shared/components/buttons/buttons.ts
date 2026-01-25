import { Component, input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {
    label = input<string>();
    variant = input<'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' >('primary');
}
