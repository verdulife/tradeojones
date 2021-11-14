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
    color: $pri;
    background: rgba(#000, 0.2);
    border: 1px solid rgba($border, 0.05);
    border-top-left-radius: 18px 15px;
    border-top-right-radius: 18px 15px;
    border-bottom-left-radius: 18px 15px;
    border-bottom-right-radius: 18px 15px;
    margin-bottom: 5px;
    padding: 15px;

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
    }
  }
</style>
