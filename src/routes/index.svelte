<script>
  import { ui } from "$content/home";
  import { userData } from "../stores";
  import Total from "$lib/Total.svelte";
  import Card from "$lib/Card.svelte";
  import Add from "$lib/Add.svelte";
  import { onMount } from "svelte";

  $: userAssets = $userData;

  async function updateAssetPrice() {
    const req = await fetch("/api");
    if (req.ok) {
      const res = await req.json();

      $userData.forEach((asset) => {
        const price = res.find((item) => item.symbol === asset.symbol);
        if (price) asset.price = price.price;
      });
    }
  }

  function sumTotalAmount() {
    const total = userAssets.reduce((acc, cur) => {
      return acc + cur.amount * cur.price;
    }, 0);

    return total;
  }

  onMount(async () => {
    await updateAssetPrice();
    sumTotalAmount();
  });
</script>

<svelte:head>
  <title>{ui.title}</title>
  <meta name="description" content={ui.description} />
</svelte:head>

<div class="view col fill">
  <Total amount={sumTotalAmount()} />

  <div class="scroll">
    <ul class="col acenter xfill">
      {#each userAssets as asset}
        <li class="xfill">
          <Card data={asset} />
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
    padding: 20px 10px 150px 10px;
  }

  .add-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px;
  }
</style>
