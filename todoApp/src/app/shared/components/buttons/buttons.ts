import { Component, input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {
    btntext = input<string>();    
}
