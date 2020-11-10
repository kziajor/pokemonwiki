<template>
  <div class="home">
    <PokemonsList msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PokemonsList from '@/components/PokemonsList.vue';

@Component({
  components: {
    PokemonsList,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  h1 {
    small {
      font-size: 0.6em;
      color: #aaa;
      vertical-align: top;

      &::before {
        content: '(';
      }

      &::after {
        content: ')';
      }
    }
  }
</style>
