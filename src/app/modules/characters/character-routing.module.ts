import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { CharacterListComponent } from './pages/character-list/character-list.component';

const routes: Routes = [
  {
    path: 'characters',
    redirectTo: 'characters/1',
    pathMatch: 'full'
  },
  {
    path: 'characters/:page',
    component: CharacterListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
