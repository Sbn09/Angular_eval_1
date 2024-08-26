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

  categories: { nom: string; images: string[] }[] = [];

  ngOnInit() {
    const categoriesSauvegarde = localStorage.getItem('categories');

    if (categoriesSauvegarde == null) {
      this.reset();
    } else {
      this.categories = JSON.parse(categoriesSauvegarde);
    }
  }

  onClicAjouter() {
    this.categories[0].images.push(this.urlImage);
    this.urlImage = '';
    this.sauvegarde();
  }

  reset() {
    this.categories = [
      {
        nom: 'tres bien',
        images: [],
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

    this.sauvegarde();
  }

  sauvegarde() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }

  onClicChangementCategorie(
    indexCategorie: number,
    indexImage: number,
    moins: boolean,
  ) {
    //on récupère l'url de l'image cliquée
    const urlImage = this.categories[indexCategorie].images[indexImage];

    //on ajoute l'image dans la catégorie inférieure si moins = true, et supérieure si moins = false
    this.categories[indexCategorie + (moins ? 1 : -1)].images.push(urlImage);

    //on supprime l'image de la catégorie actuelle
    this.categories[indexCategorie].images.splice(indexImage, 1);

    this.sauvegarde();
  }

  onClicSupprime(indexCategorie: number, indexImage: number) {
    //on supprime l'image de la catégorie actuelle
    this.categories[indexCategorie].images.splice(indexImage, 1);

    this.sauvegarde();
  }
}
