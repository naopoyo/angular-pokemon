import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PokedexEffects } from './effects';
import { reducer } from './reducers';
import { featureName } from './states';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([PokedexEffects]),
  ],
})
export class PokedexStoreModule { }
