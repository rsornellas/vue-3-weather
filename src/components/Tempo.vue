<template>
  <div
    v-if="condition"
    class="box"
    :class="condition === 'cloudly_days' || 'cloudly_night' ? 'cloud' : 'warm'"
  >
    <div class="location-box">
      <div class="location">{{ city }}</div>
      <div class="date">{{ date }}</div>
    </div>

    <div class="weather-box">
      <div class="temp">{{ temp }}°c</div>
      <div class="weather">
        {{ condition === "cloudly_days" || "cloudly_night" ? "Nublado" : "" }}
      </div>
      <div class="wind">Ventos de {{ wind }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    return {
      city: computed(() => props.data.weatherData.data.results.city),
      temp: computed(() => props.data.weatherData.data.results.temp),
      condition: computed(
        () => props.data.weatherData.data.results.condition_slug
      ),
      wind: computed(() => props.data.weatherData.data.results.wind_speedy),
      date: computed(() => props.data.weatherData.data.results.date),
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 400px) {
  .box {
    margin: 100px auto auto auto;
    border-radius: 30px;
    border: 2px solid grey;
  }

  .box:hover {
    transform: rotate(-30deg) skew(25deg) scale(0.5);
    transition: 1s;
    box-shadow: -12px 12px grey;
  }
}

.box {
  padding: 150px 10px 50px 10px;
  height: 667px;
  width: 375px;
}

.cloud {
  background-image: url("../assets/cold-bg.jpeg");
  background-size: cover;
}

.warm {
  background-image: url("../assets/warm-bg.jpeg");
  background-size: cover;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .wind {
  margin-top: 10px;
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  margin-top: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
</style>
