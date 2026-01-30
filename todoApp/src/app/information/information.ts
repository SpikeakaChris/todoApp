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
        if (!option) return;

        const name = option.value?.trim();
        let img = option.getAttribute('data-img')?.trim() || '';
        
        
        if (!name || !img) {
            console.warn('Ungültige Auswahl oder fehlendes data-img:', { name, img });
            return;
        }

        const exists = this.badges.some(b => b.name === name);
        if (!exists) {
            this.badges.push({ name, img });
        }

    }
}