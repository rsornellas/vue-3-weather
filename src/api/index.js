import axios from "axios";

const instance = axios.create({
  timeout: 1000,
  headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
});

const getData = async () => {
  const geoInfos = await instance.get(
    "https://api.hgbrasil.com/geoip?format=json-cors&key=594e0feb&address=remote&precision=false"
  );

  const weatherData = await instance.get(
    `https://api.hgbrasil.com/weather?format=json-cors&key=594e0feb&woeid=${geoInfos.data.results.woeid}`
  );

  return {
    weatherData
  };
};

export default {
  getData
}
