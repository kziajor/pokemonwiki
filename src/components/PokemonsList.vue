<template>
  <div class="pokemons-list">
    <h1>Pokemons list <small v-if="count != null">{{ count }}</small></h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import pokemons from '@/store/modules/pokemons';

@Component
export default class PokemonsList extends Vue {
  get pokemon() {
    return pokemons.ActualPokemon;
  }

  get count() {
    return pokemons.PokemonCount;
  }
}
</script>
