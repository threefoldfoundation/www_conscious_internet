<template>
  <section class="py-12 px-4 text-center">
    <div class="w-full max-w-2xl mx-auto">
      <h2
        class="text-main-color text-4xl leading-tight font-semibold font-heading"
      >
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="text-main-color mt-6 mb-8 text-gray-700 leading-relaxed"
      ></div>
      <g-link
        v-if="cta.button"
        class="bg-main-color learn-button hover:bg-main-color-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
        :to="cta.link"
        >{{ cta.button }}</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["cta"],
};
</script>