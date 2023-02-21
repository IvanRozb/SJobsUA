const subscriptionKey = "604df95991284fb78e939cccc84b9edb";
const endpoint = "https://api.cognitive.microsofttranslator.com/";

export const translateText = async (text, source, target) => {
  const response = await fetch(
    `${endpoint}/translate?api-version=3.0&from=${source}&to=${target}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "Ocp-Apim-Subscription-Region": "westeurope",
      },
      body: JSON.stringify([{ text }]),
    }
  );
  const data = await response.json();
  return data[0].translations[0].text;
};

export async function translateAllCities(cities, source, target) {
  return await Promise.all(
    cities.map(async (city) => {
      city.name = await translateText(city.name, source, target);
      if (target === "en" && city.name === "Exactly") city.name = "Rivne";
      return city;
    })
  );
}
