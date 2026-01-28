import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buttons } from '../shared/components/buttons/buttons';

@Component({
  selector: 'app-information',
  imports: [CommonModule, Buttons],
  templateUrl: './information.html',
  styleUrl: './information.css',
})
export class Information {



    badges: { name: string; img: string }[] = [];

    onSelect(event: Event) {
        const select = event.target as HTMLSelectElement;
        const option = select.options[select.selectedIndex];

        const name = option.value;
        const img = option.dataset['img'];

        if (!img) return;

        this.badges.push({ name, img });
    }
}