import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  urlImage: string = '';

  categories = [
    {
      nom: 'tres bien',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUbGxdooqKHGls6i0vJT0yXIIHN-PJtllBw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBt8KutuFKY80alLnA2fsk4HgqOUdrVkDCQ&s',
      ],
    },
    {
      nom: 'bien',
      images: [
        'https://media.vogue.fr/photos/5e4bb48e9680cf00087e0e72/2:3/w_2560%2Cc_limit/82341124_2450116928574569_2617825020968777009_n.jpg',
      ],
    },
    {
      nom: 'moyen',
      images: [],
    },
    {
      nom: 'bof',
      images: [],
    },
    {
      nom: 'nul',
      images: [],
    },
  ];

  onClicAjouter() {
    this.categories[0].images.push(this.urlImage);
    this.urlImage = '';
  }
}
