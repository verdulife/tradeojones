<script>
  import { ui } from "$content/total";
  import { currencyFormat } from "$lib/utils";

  export let amount = 0;
</script>

<header class="col acenter xfill">
  <h1>{currencyFormat(amount, "USD")}</h1>

  <small>{ui.label}</small>
</header>

<style lang="scss">
  header {
    color: $bg;
    box-shadow: 0 10px 50px 0 rgba(#000, 0.5);
    padding: 10px 20px;

    h1 {
      font-weight: lighter;
    }

    small {
      font-weight: bold;
    }
  }
</style>
