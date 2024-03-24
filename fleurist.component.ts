import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajout-fleuriste',
  templateUrl: './ajout-fleuriste.component.html',
  styleUrls: ['./ajout-fleuriste.component.css']
})
export class AjoutFleuristeComponent {
  showAddForm: boolean = false; 
  showEditForm: boolean = false;
  id_fleuriste: number;
  nom: string = ''; 
  mail: string = '';  
  num_tel: number; 
  localisation: string = ''; 
  avis: number; 
  prix: number;
  service: string[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.recupererListeFleuristes(); // Appel de la méthode pour récupérer la liste des fleuristes au chargement du composant
  }
  

  
  ajouter() {
    this.showAddForm = true;
  }

  
  ajouterFleuriste() {
    this.http.post<any>('http://127.0.0.1:3000/fleuriste.php', {
      nom: this.nom,
      localisation: this.localisation,
      id_fleuriste: this.id_fleuriste,
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
  
  }

  annuler() {

    this.resetForm();
    this.showAddForm = false;
  }


  resetForm() {
    this.id=null;
    this.nom = '';
    this.localisation = '';
    this.avis = null;
    this.prix = null;
    this.mail = '';
    this.num_tel = null;
    this.service = [];
  }

  
  recupererListeFleuristes() {
    this.http.get<any>('http://127.0.0.1:3000/fleuriste.php')
      .subscribe(response => {
        console.log(response); // Traiter la réponse du serveur, par exemple affecter la réponse à une variable pour l'affichage dans le front-end
      }, error => {
        console.error(error); // Gérer les erreurs
      });
  }


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
supprimerFleuriste(id: number) {
  this.http.delete<any>('http://127.0.0.1:3000/fleuriste.php?id_fleuriste=' + id)
    .subscribe(response => {
      console.log(response); // Traiter la réponse du serveur
    }, error => {
      console.error(error); // Gérer les erreurs
    });
}

  annulerModification() {
    this.id_fleuriste = null; 
    this.showEditForm = false; 
  }
}
