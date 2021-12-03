import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexIndexPage } from './pokedex-index.page';
import { PokedexIndexContainer } from './containers/pokedex-index/pokedex-index.container';
import { PokedexIndexComponent } from './components/pokedex-index/pokedex-index.component';



@NgModule({
  declarations: [
    PokedexIndexPage,
    PokedexIndexContainer,
    PokedexIndexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokedexIndexModule { }
