<script>
  import { ui } from "$content/home";
  import Total from "$lib/Total.svelte";
  import Card from "$lib/Card.svelte";
  import Add from "$lib/Add.svelte";

  const cryptos = [
    {
      img: "https://www.cryptocompare.com/media/19633/btc.png",
      name: "Bitcoin",
      price: 12_000.0,
      amount: 1_000.0,
    },
    {
      img: "https://www.cryptocompare.com/media/19633/btc.png",
      name: "Bitcoin",
      price: 12_000.0,
      amount: 1_000.0,
    },
    {
      img: "https://www.cryptocompare.com/media/19633/btc.png",
      name: "Bitcoin",
      price: 12_000.0,
      amount: 1_000.0,
    },
    {
      img: "https://www.cryptocompare.com/media/19633/btc.png",
      name: "Bitcoin",
      price: 12_000.0,
      amount: 1_000.0,
    },
    {
      img: "https://www.cryptocompare.com/media/19633/btc.png",
      name: "Bitcoin",
      price: 12_000.0,
      amount: 1_000.0,
    },
    {
      img: "https://www.cryptocompare.com/media/19633/btc.png",
      name: "Bitcoin",
      price: 12_000.0,
      amount: 1_000.0,
    },
    {
      img: "https://www.cryptocompare.com/media/19633/btc.png",
      name: "Bitcoin",
      price: 12_000.0,
      amount: 1_000.0,
    },
  ];
</script>

<svelte:head>
  <title>{ui.title}</title>
  <meta name="description" content={ui.description} />
</svelte:head>

<div class="view col fill">
  <Total amount={1239999} />

  <div class="scroll">
    <ul class="col acenter xfill">
      {#each cryptos as crypto}
        <li class="xfill">
          <Card data={crypto} />
        </li>
      {/each}
    </ul>
  </div>

  <div class="add-wrapper row jcenter xfill">
    <Add />
  </div>
</div>

<style lang="scss">
  ul {
    padding: 10px;
  }

  .add-wrapper {
    padding: 10px 20px;
  }
</style>
