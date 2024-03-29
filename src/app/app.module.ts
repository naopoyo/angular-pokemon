import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql/graphql.module';
import { AppStoreModule } from './store/app-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    GraphQLModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
