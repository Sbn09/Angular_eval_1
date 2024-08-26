import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  categories = [
    {
      nom: 'tres bien',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUbGxdooqKHGls6i0vJT0yXIIHN-PJtllBw&s',
      ],
    },
    {
      nom: 'bien',
      images: [],
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
}
