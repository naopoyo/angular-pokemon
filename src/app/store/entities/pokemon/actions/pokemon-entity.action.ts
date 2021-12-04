import { createAction, props } from '@ngrx/store'

import { PokemonStateModel } from '../../../models/pokemon/pokemon.state-model'

export const upsertMany = createAction(
  '[PokemonEntity] Upsert Many',
  props<{ models: PokemonStateModel[] }>()
)
