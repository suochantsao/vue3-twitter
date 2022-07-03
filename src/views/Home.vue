<template>
  <div class="home bg-gray-300">
    <div class="container mx-auto flex justify-center">
      <TwitterSearchBox />
      <TwitterResultList />
    </div>
  </div>
</template>

<script>
// components
import TwitterSearchBox from "../components/TwitterSearchBox.vue";
import TwitterResultList from "../components/TwitterResultList.vue";

export default {
  name: "Home",
  components: {
    TwitterSearchBox,
    TwitterResultList,
  },
};
</script>
