import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterFleuristeComponent } from './ajouter-fleuriste.component';
import { ModifierFleuristeComponent } from './modifier-fleuriste.component';
import { SupprimerFleuristeComponent } from './supprimer-fleuriste.component';
const routes: Routes = [
    { path: 'ajouter-fleuriste', component: AjouterFleuristeComponent },
    { path: 'modifier-fleuriste', component: ModifierFleuristeComponent },
    { path: 'supprimer-fleuriste', component: SupprimerFleuristeComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }