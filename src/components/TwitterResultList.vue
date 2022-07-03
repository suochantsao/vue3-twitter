<template>
  <main class="twitter-result-list py-4 px-7 bg-white w-720">
    <h1 class="text-3xl font-bold text-black bg-neutral-800" @click="test">
      Tweet Result List
    </h1>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </main>
</template>

<script>
import axios from "axios";
export default {
  setup() {
    const CONFIG = {
      Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
    };
    axios
      .get("/2/tweets/search/recent", {
        params: {
          query: "台灣",
        },
        headers: CONFIG,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    return {};
  },
};
</script>
