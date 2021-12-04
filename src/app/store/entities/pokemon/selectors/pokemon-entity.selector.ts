import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'

import { State, adapter, featureName } from '../states'

import { Pokemon } from 'src/app/models/pokemon/pokemon.model'

export const selectPokemonEntityState = createFeatureSelector<State>(
  featureName
)

export const {
  selectIds: selectPokemonIds,
  selectEntities: selectPokemonEntities,
  selectAll: selectAllPokemonEntities,
  selectTotal: selectTotalPokemonEntities,
} = adapter.getSelectors(selectPokemonEntityState)

export const selectPokemons = createSelector(
  selectAllPokemonEntities,
  selectPokemonEntities,
  ((allEntities, entities) => allEntities.map((entity) =>
  ({
    ...entity,
    evolutions: entity.evolutions && entity.evolutions.map((e) => e.id && entities[e.id] && ({
      ...entities[e.id],
      evolutions: []
    } as Pokemon))
  } as Pokemon)
  ))
)

