import { Component, Input, OnInit } from '@angular/core';

import { Pokemon } from 'src/app/models/pokemon/pokemon.model'

@Component({
  selector: 'app-pokedex-index',
  templateUrl: './pokedex-index.component.html',
  styleUrls: ['./pokedex-index.component.scss']
})
export class PokedexIndexComponent implements OnInit {

  @Input()
  pokemons!: Pokemon[] | null

  constructor() { }

  ngOnInit(): void { }

}
