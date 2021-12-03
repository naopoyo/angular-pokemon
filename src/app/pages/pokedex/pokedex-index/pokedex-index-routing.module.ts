import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexIndexPage } from './pokedex-index.page';

const routes: Routes = [
  {
    path: '',
    component: PokedexIndexPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexIndexRoutingModule { }
