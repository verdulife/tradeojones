<script>
  import { currencyFormat, cryptoFormat } from "$lib/utils";

  export let data = {
    img: "",
    name: "Shiba Inu",
    symbol: "$",
    price: 0.000058,
    amount: 2_000_000,
  };
</script>

<div class="card row acenter xfill">
  <div class="logo">
    <img class="fill" src={data.img} alt={data.name} />
  </div>

  <div class="col grow">
    <h2>{data.name}</h2>
    <small>{currencyFormat(data.price, "USD")}</small>
  </div>

  <div class="col aend grow">
    <p>{currencyFormat(data.price * data.amount, "USD")}</p>
    <p>{cryptoFormat(data.amount, data.symbol)}</p>
  </div>
</div>

<style lang="scss">
  .card {
    position: relative;
    color: $pri;
    background: rgba(#0d0e1f, 0.5);
    mask-image: paint(squircle);
    --squircle-radius: 10px;
    --squircle-smooth: 0.4;
    backdrop-filter: blur(5px);
    margin-bottom: 5px;
    padding: 15px;

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

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;

      img {
        object-fit: contain;
      }
    }

    h2 {
      font-size: 18px;
    }

    small {
      font-size: 10px;
    }

    p {
      font-size: 12px;

      &:first-of-type {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
</style>
