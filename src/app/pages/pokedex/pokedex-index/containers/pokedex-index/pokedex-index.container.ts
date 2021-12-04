import { Component, OnInit } from '@angular/core';

import { PokedexFacade } from 'src/app/store/pokedex/facades';

@Component({
  selector: 'app-pokedex-index-container',
  templateUrl: './pokedex-index.container.html',
  styleUrls: ['./pokedex-index.container.scss']
})
export class PokedexIndexContainer implements OnInit {

  pokemons$ = this.pokedexFacade.pokemons$

  constructor(private pokedexFacade: PokedexFacade) {
    this.pokedexFacade.fetchPokemons({ first: 151 })
  }

  ngOnInit(): void { }

}
