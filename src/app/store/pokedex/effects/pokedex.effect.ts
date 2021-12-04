import { Injectable } from '@angular/core'

import { createEffect, Actions, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, catchError, concatMap } from 'rxjs/operators'

import * as PokedexActions from '../actions'
import * as PokemonEntityActions from 'src/app/store/entities/pokemon/actions'

import { PokemonStateModel } from 'src/app/store/models/pokemon/pokemon.state-model'

import { FetchPokemonsGQL } from 'src/app/graphql/generated'

@Injectable()
export class PokedexEffects {
  constructor(
    private actions$: Actions,
    private fetchUserGQL: FetchPokemonsGQL
  ) { }

  /**
   * fetchPokemons$
   */
  fetchPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokedexActions.fetchPokemons),
      concatMap((action) =>
        this.fetchUserGQL.fetch(action.vars).pipe(
          map((result) => PokedexActions.fetchPokemonsSuccess({ result: result })),
          catchError((error) => of(PokedexActions.fetchPokemonsFailure({ error: error })))
        )
      )
    )
  )

  fetchPokemonsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokedexActions.fetchPokemonsSuccess),
      map((action) =>
        PokemonEntityActions.upsertMany({
          models: action.result.data.pokemons as PokemonStateModel[]
        }))
    )
  )
}
