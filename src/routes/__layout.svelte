<script context="module">
  export async function load({ fetch }) {
    const req = await fetch("/api");

    if (req.ok) {
      return {
        props: {
          data: await req.json(),
        },
      };
    } else {
      return {
        props: {
          data: {
            error: true,
          },
        },
      };
    }
  }
</script>

<script>
  import Nav from "$lib/Nav.svelte";
  import "$fonts/circular.css";
  import "$fonts/operator.css";
  import { navigating } from "$app/stores";

  export let data;
  console.log(data);
</script>

<main>
  <Nav />

  {#if $navigating}
    <img width="200" height="200" src="/loading.svg" alt="Loading" />
  {:else}
    <div class="view fill">
      <slot />
    </div>
  {/if}
</main>

<style lang="scss">
  :global {
    @import "./src/_reset.scss";
    @import "../node_modules/verdu/verdu.scss";
  }

  main {
    background: url("/bg.jpg") no-repeat center;
    background-size: cover;
  }

  .view {
    height: calc(100% - 65px);
  }
</style>
