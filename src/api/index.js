import axios from "axios";

const instance = axios.create({
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getData = async () => {
  try {
    const geoInfos = await instance.get(
      "https://api.hgbrasil.com/geoip?format=json-cors&key=xxxxx&address=remote&precision=false"
    );

    const weatherData = await instance.get(
      `https://api.hgbrasil.com/weather?format=json-cors&key=xxxxxb&woeid=${geoInfos.data.results.woeid}`
    );

    return {
      weatherData,
    };
  } catch (error) {
    return {
      by: "woeid",
      valid_key: true,
      results: {
        temp: 18,
        date: "19/04/2020",
        time: "07:25",
        condition_code: "33",
        description: "Estrelado",
        currently: "dia",
        cid: "",
        city: "Florianopolis, SC",
        img_id: "33",
        humidity: 85,
        wind_speedy: "6 km/h",
        sunrise: "6:34 am",
        sunset: "5:52 pm",
        condition_slug: "clear_day",
        city_name: "Florianopolis",
        forecast: [
          {
            date: "19/04",
            weekday: "Dom",
            max: 22,
            min: 17,
            description: "Ensolarado com muitas nuvens",
            condition: "cloudly_day",
          },
          {
            date: "20/04",
            weekday: "Seg",
            max: 23,
            min: 17,
            description: "Ensolarado",
            condition: "clear_day",
          },
          {
            date: "21/04",
            weekday: "Ter",
            max: 25,
            min: 17,
            description: "Ensolarado",
            condition: "clear_day",
          },
          {
            date: "22/04",
            weekday: "Qua",
            max: 24,
            min: 17,
            description: "Ensolarado",
            condition: "clear_day",
          },
          {
            date: "23/04",
            weekday: "Qui",
            max: 22,
            min: 18,
            description: "Parcialmente nublado",
            condition: "cloudly_day",
          },
          {
            date: "24/04",
            weekday: "Sex",
            max: 23,
            min: 18,
            description: "Ensolarado com muitas nuvens",
            condition: "cloudly_day",
          },
          {
            date: "25/04",
            weekday: "Sáb",
            max: 25,
            min: 20,
            description: "Ensolarado",
            condition: "clear_day",
          },
          {
            date: "26/04",
            weekday: "Dom",
            max: 25,
            min: 20,
            description: "Ensolarado",
            condition: "clear_day",
          },
          {
            date: "27/04",
            weekday: "Seg",
            max: 27,
            min: 20,
            description: "Parcialmente nublado",
            condition: "cloudly_day",
          },
          {
            date: "28/04",
            weekday: "Ter",
            max: 25,
            min: 21,
            description: "Tempo nublado",
            condition: "cloud",
          },
        ],
      },
      execution_time: 0.0,
      from_cache: true,
    };
  }
};

export default {
  getData,
};
