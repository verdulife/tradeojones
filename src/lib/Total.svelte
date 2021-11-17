<script>
  import { ui } from "$content/total";
  import { currencyFormat } from "$lib/utils";
  import { userData } from "../stores";

  let totalAmount;

  function sumTotalAmount() {
    if ($userData.length > 0) {
      const total = $userData.reduce((acc, cur) => {
        return acc + cur.amount * cur.price;
      }, 0);

      return total;
    }

    return 0;
  }

  $: if ($userData) {
    totalAmount = sumTotalAmount();
  }
</script>

<header class="col acenter xfill">
  <h1>{currencyFormat(totalAmount, "USD")}</h1>

  <small>{ui.label}</small>
</header>

<style lang="scss">
  header {
    color: $bg;
    box-shadow: 0 10px 50px 0 rgba(#000, 0.5);
    padding: 20px;

    h1 {
      font-size: 40px;
      font-weight: lighter;
    }

    small {
      color: $pri;
      font-weight: bold;
    }
  }
</style>
