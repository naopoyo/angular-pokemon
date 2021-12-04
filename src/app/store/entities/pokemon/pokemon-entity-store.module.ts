import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { featureName } from './states'
import { reducer } from './reducers'

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer)
  ]
})
export class PokemonEntityStoreModule { }
