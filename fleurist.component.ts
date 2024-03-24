import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout-fleuriste',
  templateUrl: './ajout-fleuriste.component.html',
  styleUrls: ['./ajout-fleuriste.component.css']
})
export class AjoutFleuristeComponent {
  showAddForm: boolean = false; 
  nom: string = ''; 
  lieu: string = ''; 
  avis: number; 
  prixMoyen: number; 
  email: string = ''; 
  numeroTelephone: string = ''; 
  services: string[] = []; 
  image: File;

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
    this.nom = '';
    this.lieu = '';
    this.avis = null;
    this.prixMoyen = null;
    this.email = '';
    this.numeroTelephone = '';
    this.services = [];
    this.image = null;
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
