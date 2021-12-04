import { on, createReducer } from '@ngrx/store'

import * as Actions from '../actions'

import { initialState, adapter } from '../states'

export const reducer = createReducer(
  initialState,

  on(Actions.upsertMany, (state, { models }) =>
    adapter.upsertMany(models, state)
  ),
)
