import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout-fleuriste',
  templateUrl: './ajout-fleuriste.component.html',
  styleUrls: ['./ajout-fleuriste.component.css']
})
export class AjoutFleuristeComponent {
  showAddForm: boolean = false; 
  showAddForm: boolean = false;
  id_fleuriste: number;
  nom: string = ''; 
  mail: string = '';  
  num_tel: number; 
  localisation: string = ''; 
  avis: number; 
  prix: number;
  service: string[] = []; 
  

  constructor() {
    this.showAddForm = false; 
  }

  
  ajouter() {
    this.showAddForm = true;
  }

  
  ajouterFleuriste() {
    
    console.log('Fleuriste ajouté avec succès!');
    this.resetForm();
    this.showAddForm = false;
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

  
  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }


  afficherFormulaireModification() {
    this.showEditForm = true;
  }

  
  modifierFleuriste() {
    
    console.log('Fleuriste modifié avec succès !');
    this.annulerModification(); 
  }

  annulerModification() {
    this.idFleuristeToEdit = ''; 
    this.showEditForm = false; 
  }
}
