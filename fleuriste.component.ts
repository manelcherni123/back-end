import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import du FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Ajout du FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

interface Fleuriste {
  id:number;
  nom: string;
  lieu: string;
  avis: number;
  prixMoyen: number;
  email: string;
  numeroTelephone: string;
  services: string[];
  image: File;
}

@Component({
  selector: 'app-fleuriste',
  templateUrl: './fleuriste.component.html',
  styleUrls: ['./fleuriste.component.css']
})
export class FleuristeComponent {
  id:number;
  nom: string;
  lieu: string;
  avis: number;
  prixMoyen: number;
  email: string;
  numeroTelephone: string;
  services: string[];
  image: File;
  fleuristeAjoute: boolean = false; // Initialisation de la variable fleuristeAjoute à false
  fleuristes: Fleuriste[] = []; // Tableau pour stocker tous les fleuristes

  constructor() { }

  ajouterPrestataire() {
    // Vérifier si tous les champs sont remplis
    if (!this.nom || !this.lieu || !this.avis || !this.prixMoyen || !this.email || !this.numeroTelephone || !this.services || !this.image) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Vérifier si l'avis est dans la plage valide (0 à 5)
    if (this.avis < 0 || this.avis > 5) {
      alert("L'avis doit être compris entre 0 et 5.");
      return;
    }

    // Créer un nouvel objet Fleuriste avec les données saisies
    const nouveauFleuriste: Fleuriste = {
      nom: this.nom,
      lieu: this.lieu,
      avis: this.avis,
      prixMoyen: this.prixMoyen,
      email: this.email,
      numeroTelephone: this.numeroTelephone,
      services: this.services,
      image: this.image
    };

    // Ajouter le nouveau fleuriste au tableau des fleuristes
    this.fleuristes.push(nouveauFleuriste);

    // Mettre à jour la variable fleuristeAjoute pour afficher le message de succès
    this.fleuristeAjoute = true;

   
