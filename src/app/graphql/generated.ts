import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Represents a Pokémon's attack types */
export type Attack = {
  __typename?: 'Attack';
  /** The damage of this Pokémon attack */
  damage?: Maybe<Scalars['Int']>;
  /** The name of this Pokémon attack */
  name?: Maybe<Scalars['String']>;
  /** The type of this Pokémon attack */
  type?: Maybe<Scalars['String']>;
};

/** Represents a Pokémon */
export type Pokemon = {
  __typename?: 'Pokemon';
  /** The attacks of this Pokémon */
  attacks?: Maybe<PokemonAttack>;
  /** The classification of this Pokémon */
  classification?: Maybe<Scalars['String']>;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<Array<Maybe<Pokemon>>>;
  fleeRate?: Maybe<Scalars['Float']>;
  /** The minimum and maximum weight of this Pokémon */
  height?: Maybe<PokemonDimension>;
  /** The ID of an object */
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  /** The maximum CP of this Pokémon */
  maxCP?: Maybe<Scalars['Int']>;
  /** The maximum HP of this Pokémon */
  maxHP?: Maybe<Scalars['Int']>;
  /** The name of this Pokémon */
  name?: Maybe<Scalars['String']>;
  /** The identifier of this Pokémon */
  number?: Maybe<Scalars['String']>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The type(s) of this Pokémon */
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: Maybe<PokemonDimension>;
};

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  /** The fast attacks of this Pokémon */
  fast?: Maybe<Array<Maybe<Attack>>>;
  /** The special attacks of this Pokémon */
  special?: Maybe<Array<Maybe<Attack>>>;
};

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  /** The maximum value of this dimension */
  maximum?: Maybe<Scalars['String']>;
  /** The minimum value of this dimension */
  minimum?: Maybe<Scalars['String']>;
};

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  /** The amount of candy to evolve */
  amount?: Maybe<Scalars['Int']>;
  /** The name of the candy to evolve */
  name?: Maybe<Scalars['String']>;
};

/** Query any Pokémon by number or name */
export type Query = {
  __typename?: 'Query';
  pokemon?: Maybe<Pokemon>;
  pokemons?: Maybe<Array<Maybe<Pokemon>>>;
  query?: Maybe<Query>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonArgs = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonsArgs = {
  first: Scalars['Int'];
};

export type FetchPokemonsQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type FetchPokemonsQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', id: string, number?: string | null | undefined, name?: string | null | undefined, classification?: string | null | undefined, types?: Array<string | null | undefined> | null | undefined, resistant?: Array<string | null | undefined> | null | undefined, weaknesses?: Array<string | null | undefined> | null | undefined, fleeRate?: number | null | undefined, maxCP?: number | null | undefined, maxHP?: number | null | undefined, image?: string | null | undefined, weight?: { __typename?: 'PokemonDimension', minimum?: string | null | undefined, maximum?: string | null | undefined } | null | undefined, height?: { __typename?: 'PokemonDimension', minimum?: string | null | undefined, maximum?: string | null | undefined } | null | undefined, attacks?: { __typename?: 'PokemonAttack', fast?: Array<{ __typename?: 'Attack', name?: string | null | undefined, type?: string | null | undefined, damage?: number | null | undefined } | null | undefined> | null | undefined, special?: Array<{ __typename?: 'Attack', name?: string | null | undefined, type?: string | null | undefined, damage?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined, evolutions?: Array<{ __typename?: 'Pokemon', id: string } | null | undefined> | null | undefined, evolutionRequirements?: { __typename?: 'PokemonEvolutionRequirement', amount?: number | null | undefined, name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export const FetchPokemonsDocument = gql`
    query fetchPokemons($first: Int!) {
  pokemons(first: $first) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    weaknesses
    fleeRate
    maxCP
    evolutions {
      id
    }
    evolutionRequirements {
      amount
      name
    }
    maxHP
    image
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class FetchPokemonsGQL extends Apollo.Query<FetchPokemonsQuery, FetchPokemonsQueryVariables> {
  document = FetchPokemonsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
