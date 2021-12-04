import { createAction, props } from '@ngrx/store'
import { ApolloQueryResult } from '@apollo/client'

import {
  FetchPokemonsQueryVariables,
  FetchPokemonsQuery,
} from 'src/app/graphql/generated'

/**
 * fetchPokemons
 */
export const fetchPokemons = createAction(
  '[Pokedex] Fetch Pokemons',
  props<{ vars: FetchPokemonsQueryVariables }>()
)

export const fetchPokemonsSuccess = createAction(
  '[Pokedex] Fetch Pokemons Success',
  props<{ result: ApolloQueryResult<FetchPokemonsQuery> }>()
)

export const fetchPokemonsFailure = createAction(
  '[Pokedex] Fetch Pokemons Failure',
  props<{ error?: any }>()
)
