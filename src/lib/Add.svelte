<script>
  import { ui } from "$content/add";
  import { userData } from "../stores";
  import { slide } from "svelte/transition";
  import AutoComplete from "simple-svelte-autocomplete";

  export let selectedAsset;
  let modal = false;
  let cryptos = [];
  let asset = {};
  let userAmount = undefined;

  $: if (selectedAsset) {
    togModal(selectedAsset);
  }

  async function getCryptosList() {
    //todo delete assets that user already have
    const req = await fetch("/api");
    if (req.ok) return await req.json();
  }

  async function togModal(data) {
    if (modal) {
      modal = false;
      asset = {};
      userAmount = undefined;
      return;
    }

    if (cryptos.length === 0) {
      cryptos = await getCryptosList();
    }

    if (data) {
      asset = {
        img: data.img,
        name: data.name,
        symbol: data.symbol,
        price: data.price,
      };

      userAmount = data.amount;
    }

    modal = true;
  }

  function addAsset() {
    const newAsset = {
      img: asset.img,
      name: asset.name,
      symbol: asset.symbol,
      price: asset.price,
      amount: userAmount,
    };

    $userData = [...$userData, newAsset];
    togModal();
  }
</script>

<div class="tools row xfill">
  <div class="tool row fcenter grow" on:click={togModal}>
    <img src="/wallet.svg" alt="Add new asset" />
    <p>{ui.icon_add_label}</p>
  </div>

  <div class="tool row fcenter grow">
    <img src="/update.svg" alt="Update values" />
    <p>{ui.icon_update_label}</p>
  </div>
</div>
<!-- <button on:click={togModal}>{ui.label}</button> -->

{#if modal}
  <div class="outer" on:click={togModal} />
  <div class="modal scroll" transition:slide>
    <div class="col acenter xfill">
      <div class="input-wrapper col xfill">
        <label class="xfill" for="autocomplete">{ui.autocomplete_label}</label>
        <AutoComplete
          items={cryptos}
          bind:selectedItem={asset}
          labelFieldName="name"
          keywordsFieldName="name"
          placeholder={ui.autocomplete_placeholder}
          noResultsText={ui.autocomplete_noresults}
          hideArrow
        />
      </div>

      <div class="input-wrapper col xfill">
        <label class="xfill" for="amount">{ui.amount_label}</label>
        <div class="input-box xfill">
          <input
            class="xfill"
            id="amount"
            type="number"
            step="0.00000001"
            placeholder="0.00000001"
            autocomplete="off"
            bind:value={userAmount}
          />
        </div>
      </div>

      <button class="sec" on:click={addAsset}>ADD ASSET</button>
    </div>
  </div>
{/if}

<style lang="scss">
  .tools {
    max-width: 250px;
    background: rgba(#0d0e1f, 0.5);
    mask-image: paint(squircle);
    --squircle-radius: 10px;
    --squircle-smooth: 0.4;
    backdrop-filter: blur(5px);
    color: $bg;
    padding: 20px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(-10deg, rgba(#fff, 0.05) 50%, rgba(#fff, 0.1));
      mask-image: paint(squircle);
      --squircle-radius: 10px;
      --squircle-smooth: 0.4;
      --squircle-outline: 1px;
      z-index: -1;
    }

    .tool {
      opacity: 0.5;

      img {
        width: 25px;
        height: 25px;
        object-fit: contain;
        filter: invert(1);
        margin-right: 10px;
      }

      p {
        font-size: 10px;
      }
    }
  }

  .outer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .modal {
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: auto;
    background: rgba(#0d0e1f, 0.5);
    mask-image: paint(squircle);
    --squircle-radius: 20px;
    --squircle-smooth: 0.4;
    backdrop-filter: blur(5px);
    color: $bg;
    padding: 30px 20px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(-10deg, rgba(#fff, 0.05) 50%, rgba(#fff, 0.1));
      mask-image: paint(squircle);
      --squircle-radius: 20px;
      --squircle-smooth: 0.4;
      --squircle-outline: 1px;
      z-index: -1;
    }

    .input-wrapper {
      margin-bottom: 40px;

      &:first-of-type {
        margin-bottom: 20px;
      }

      label {
        font-size: 12px;
        color: $sec;
        padding: 0 15px 5px 15px;
      }

      .input-box {
        position: relative;
        background: rgba(#000, 0.2);
        mask-image: paint(squircle);
        --squircle-radius: 10px;
        --squircle-smooth: 0.4;

        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(-10deg, rgba(#fff, 0.05) 50%, rgba(#fff, 0.1));
          mask-image: paint(squircle);
          --squircle-radius: 10px;
          --squircle-smooth: 0.4;
          --squircle-outline: 1px;
          z-index: -1;
        }

        input {
          height: 50px;
          color: $white;
        }
      }
    }

    button {
      width: 75%;
      background: $sec;
      color: $white;
      mask-image: paint(squircle);
      --squircle-radius: 10px;
      --squircle-smooth: 0.4;
    }
  }
</style>
