<script>
  import { ui } from "$content/add";
  import { userData } from "../stores";
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

<button on:click={togModal}>{ui.label}</button>

{#if modal}
  <div class="outer" on:click={togModal} />
  <div class="modal scroll">
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
        <input
          class="out semi xfill"
          id="amount"
          type="number"
          step="0.00000001"
          placeholder="0.00000001"
          bind:value={userAmount}
        />
      </div>

      <button class="sec" on:click={addAsset}>ADD ASSET</button>
    </div>
  </div>
{/if}

<style lang="scss">
  button {
    width: 75%;
    background: $sec;
    color: $white;
    border-top-left-radius: 18px 15px;
    border-top-right-radius: 18px 15px;
    border-bottom-left-radius: 18px 15px;
    border-bottom-right-radius: 18px 15px;
  }

  .outer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#0d0e1f, 0.2);
  }

  .modal {
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: auto;
    background: rgba(#0d0e1f, 0.5);
    mask-image: paint(squircle);
    --squircle-radius: 40px;
    --squircle-smooth: 0.7;
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
      background: linear-gradient(-10deg, rgba(#fff, 0.1) 50%, rgba(#fff, 0.3));
      mask-image: paint(squircle);
      --squircle-radius: 40px;
      --squircle-smooth: 0.7;
      --squircle-outline: 1px;
      z-index: -1;
    }

    .input-wrapper {
      margin-bottom: 40px;

      label {
        padding: 0 15px 5px 15px;
      }

      .autocomplete {
        width: 100% !important;
        height: auto !important;
      }

      .autocomplete-input {
        width: 100% !important;
        background: transparent !important;
        color: $base !important;
        font-size: 16px !important;
        border: 1px solid $border !important;
        padding: 0.9em 1em !important;
        transition: 200ms !important;
      }

      .autocomplete-list {
        top: unset !important;
        width: 100% !important;
      }

      .autocomplete-list-item {
        width: 100% !important;
      }
    }
  }
</style>
