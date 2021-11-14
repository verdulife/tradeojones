const API = {
  URI: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  KEY: "eaff8e50-6cf4-47ba-8ae1-6ccc0ae7d8d2",
  HEADER: "X-CMC_PRO_API_KEY",
};

export async function get() {
  const req = await fetch(API.URI, {
    method: "GET",
    headers: {
      [API.HEADER]: API.KEY,
    },
  });

  const { data } = await req.json();

  let customData = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const customItem = {
      img: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`,
      name: item.name,
      symbol: item.symbol,
      price: item.quote.USD.price,
      amount: 0
    };

    customData.push(customItem);
  }

  return {
    body: customData,
  };
}
