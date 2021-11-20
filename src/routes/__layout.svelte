<script>
  import Nav from "$lib/Nav.svelte";
  import "$fonts/circular.css";
  import "$fonts/operator.css";
</script>

<main>
  <Nav />

  <div class="view fill">
    <slot />
  </div>
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
