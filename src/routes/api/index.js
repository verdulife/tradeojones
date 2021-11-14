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

  const data = await req.json();

  return {
    body: data,
  };
}
