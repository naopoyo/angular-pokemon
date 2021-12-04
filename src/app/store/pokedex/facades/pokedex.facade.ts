import { Injectable } from '@angular/core'

import { Store } from '@ngrx/store'

import { FetchPokemonsQueryVariables } from 'src/app/graphql/generated'

import * as PokedexActions from '../actions'
import * as PokemonEntitySelector from 'src/app/store/entities/pokemon/selectors'

@Injectable({
  providedIn: 'root',
})
export class PokedexFacade {
  pokemons$ = this.store.select(PokemonEntitySelector.selectPokemons)

  constructor(private store: Store) { }

  fetchPokemons(vars: FetchPokemonsQueryVariables): void {
    this.store.dispatch(PokedexActions.fetchPokemons({ vars: vars }))
  }
}
