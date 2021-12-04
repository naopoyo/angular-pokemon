import { createFeatureSelector } from '@ngrx/store'

import { State, featureName } from '../states'

export const selectState = createFeatureSelector<State>(featureName)
