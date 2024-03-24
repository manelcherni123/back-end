import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajout-fleuriste',
  templateUrl: './ajout-fleuriste.component.html',
  styleUrls: ['./ajout-fleuriste.component.css']
})
export class AjoutFleuristeComponent {
  showAddForm: boolean = false;
  nom: string = '';
  mail: string = '';
  num_tel: number;
  localisation: string = '';
  avis: number;
  prix: number;
  service: string[] = [];

  constructor(private http: HttpClient) { }

  ajouter() {
    this.showAddForm = true;
  }

  ajouterFleuriste() {
    this.http.post<any>('http://127.0.0.1:3000/fleuriste.php', {
      nom: this.nom,
      localisation: this.localisation,
      num_tel: this.num_tel,
      mail: this.mail,
      prix: this.prix,
      service: this.service,
      avis: this.avis
    }).subscribe(response => {
      console.log(response); // Affichage de la réponse du serveur
      // Autres actions après réception de la réponse
    }, error => {
      console.error(error); // Gestion des erreurs
    });
  }

  annuler() {
    this.resetForm();
    this.showAddForm = false;
  }

  resetForm() {
    this.nom = '';
    this.localisation = '';
    this.avis = null;
    this.prix = null;
    this.mail = '';
    this.num_tel = null;
    this.service = [];
  }
}
