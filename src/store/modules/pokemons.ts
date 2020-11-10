import { Module, VuexModule, getModule, Mutation } from 'vuex-module-decorators'
import { Pokemon } from '../models'
import store from '@/store'

@Module({
    namespaced: true,
    dynamic: true,
    name: 'pokemons',
    store
})
class PokemonsModule extends VuexModule
{
  PokemonCount: number | null = null;
  ActualPokemon: Pokemon | null = null;

  @Mutation
  setPokemonCount(pokemonCount: number | null)
  {
    this.PokemonCount = pokemonCount;
  }
}

export default getModule(PokemonsModule)