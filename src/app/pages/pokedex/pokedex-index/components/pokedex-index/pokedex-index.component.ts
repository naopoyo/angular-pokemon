import { Component, OnInit } from '@angular/core';
import { FetchPokemonsGQL, FetchPokemonsQuery } from 'src/app/graphql/generated'

@Component({
  selector: 'app-pokedex-index',
  templateUrl: './pokedex-index.component.html',
  styleUrls: ['./pokedex-index.component.scss']
})
export class PokedexIndexComponent implements OnInit {

  pokemons: FetchPokemonsQuery["pokemons"]

  constructor(private fetchPokemonsGQL: FetchPokemonsGQL) { }

  ngOnInit(): void {
    this.fetchPokemonsGQL.fetch().subscribe((result) => this.pokemons = result.data.pokemons)
  }

}
