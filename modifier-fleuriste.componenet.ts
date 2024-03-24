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
    this.http.put<any>('http://127.0.0.1:3000/fleuriste.php?id_fleuriste=' + this.id_fleuriste,{
    }).subscribe(response => {
       console.log(response); // Traiter la réponse du serveur
       this.annulerModification(); 
    }, error => {
       console.error(error); // Gérer les erreurs
     });
  }

  annulerModification() {
    this.id_fleuriste = null; 
    this.showEditForm = false; 
  }
}
