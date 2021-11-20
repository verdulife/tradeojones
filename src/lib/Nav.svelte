<script>
  import { ui } from "$content/nav";
  import { page } from "$app/stores";
  import { apiCalls } from "../stores";

  function getApiCalls() {
    alert($apiCalls);
  }
</script>

<nav class="row jbetween acenter xfill">
  <a href="/" class="row acenter" on:click={getApiCalls}>
    <img class="logo" src="/logo.svg" alt="tradeojones" />
  </a>
</nav>

<style lang="scss">
  nav {
    height: 65px;
    padding: 0 20px;
  }

  .logo {
    width: 150px;
  }
</style>
