import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

import { PokemonEntityStoreModule } from './entities/pokemon/pokemon-entity-store.module';
import { PokedexStoreModule } from './pokedex/pokedex-store.module';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    !environment.production
      ? StoreDevtoolsModule.instrument({})
      : [],

    PokemonEntityStoreModule,
    PokedexStoreModule,
  ]
})
export class AppStoreModule { }
