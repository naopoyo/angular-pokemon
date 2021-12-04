import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

import { PokemonStateModel } from '../../../models/pokemon/pokemon.state-model'

export const featureName = 'pokemonEntity';

export interface State extends EntityState<PokemonStateModel> {}

export const adapter: EntityAdapter<PokemonStateModel> = createEntityAdapter<PokemonStateModel>()

export const initialState: State = adapter.getInitialState({})
