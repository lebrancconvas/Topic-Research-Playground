<script lang="ts">
  import Router from 'svelte-spa-router';
  import Home from './pages/Home.svelte';

  const routes = {
    "/": Home,
  }
</script>

<main>
  <Router {routes} />
</main>

<style>
  main {
    font-family: 'Press Start 2P', cursive;
    text-align: center;
  }
</style>