import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supprimer-fleuriste',
  templateUrl: './supprimer-fleuriste.component.html',
  styleUrls: ['./supprimer-fleuriste.component.css']
})
export class SupprimerFleuristeComponent {
  constructor(private http: HttpClient) { }

  supprimerFleuriste(id: number) {
    this.http.delete<any>('http://127.0.0.1:3000/fleuriste.php?id_fleuriste=' + id)
      .subscribe(response => {
        console.log(response); // Traiter la réponse du serveur
      }, error => {
        console.error(error); // Gérer les erreurs
      });
  }
}
