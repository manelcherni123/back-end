import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifier-fleuriste',
  templateUrl: './modifier-fleuriste.component.html',
  styleUrls: ['./modifier-fleuriste.component.css']
})
export class ModifierFleuristeComponent {
  showEditForm: boolean = false;
  id_fleuriste: number;

  constructor(private http: HttpClient) { }

  afficherFormulaireModification() {
    this.showEditForm = true;
  }

  modifierFleuriste() {
    const updatedData = {
    nom: this.nom,
    localisation: this.localisation,
    avis: this.avis,
    prix: this.prix,
    mail: this.mail,
    num_tel: this.num_tel,
    service: this.service,
  };

  // Make the HTTP PUT request with the updated data
  this.http.put<any>('http://127.0.0.1:3000/fleuriste.php?id_fleuriste=' + this.id_fleuriste, updatedData)
    .subscribe(response => {
      console.log(response); // Handle server response
      this.annulerModification(); 
    }, error => {
      console.error(error); // Handle errors
    });
  }

  annulerModification() {
    this.id_fleuriste = null; 
    this.showEditForm = false; 
  }
}
