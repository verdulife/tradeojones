<script context="module">
  export async function load({ fetch }) {
    const req = await fetch("/api");

    if (req.ok) {
      const res = await req.json();

      return {
        props: {
          cryptos: res,
        },
      };
    }
  }
</script>

<script>
  import { ui } from "$content/home";
  import Total from "$lib/Total.svelte";
  import Card from "$lib/Card.svelte";
  import Add from "$lib/Add.svelte";

  export let cryptos;
</script>

<svelte:head>
  <title>{ui.title}</title>
  <meta name="description" content={ui.description} />
</svelte:head>

<div class="view col fill">
  <Total amount={1200} />

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
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 10px 20px;
  }
</style>
