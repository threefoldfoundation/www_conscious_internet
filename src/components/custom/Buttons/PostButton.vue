<template>
  <div class="mt-8" v-if="card.button">
    <a
      :href="card.link"
      class="bg-main-color learn-button hover:bg-main-color-700 text-gray-100 px-5 py-3 font-semibold rounded"
      >{{ card.button }}</a
    >
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>