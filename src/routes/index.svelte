<script>
  import { ui } from "$content/home";
  import { userData } from "../stores";
  import Total from "$lib/Total.svelte";
  import Card from "$lib/Card.svelte";
  import Add from "$lib/Add.svelte";

  $: userAssets = $userData;
  let selectedAsset;
</script>

<svelte:head>
  <title>{ui.title}</title>
  <meta name="description" content={ui.description} />
</svelte:head>

<div class="view col fill">
  <Total />

  <div class="scroll">
    <ul class="col acenter xfill">
      {#each userAssets as asset}
        <li class="row jcenter xfill" on:click={() => (selectedAsset = asset)}>
          <Card data={asset} />
        </li>
      {/each}
    </ul>
  </div>

  <div class="add-wrapper row jcenter xfill">
    <Add bind:selectedAsset />
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
