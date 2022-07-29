<template>
  <div class="lg:py-12 lg:flex lg:justify-center flex flex-col">
    <div
      class="newCard bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:min-h-full lg:shadow-lg lg:rounded-lg"
    >
      <div class="lg:w-1/2">
        <div class="h-64 bg-cover lg:rounded-lg lg:h-full" :style="img"></div>
      </div>
      <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 class="text-3xl text-gray-700 font-bold">{{ card.title }}</h2>
        <div class="mt-4 text-gray-700" v-html="card.content"></div>
        <div class="mt-8 tracking-wide leading-loose" v-if="card.button">
          <a
            @click="toggleModal"
            class="bg-main-color learn-button hover:bg-main-color-700 text-gray-100 px-5 py-3 font-semibold rounded cursor-pointer"
            >{{ card.button }}</a
          >
        </div>
        <ul class="mt-10">
          <li v-if="card.company" class="mb-2">
            <font-awesome
              class="mr-2 text-gray-700"
              :icon="['fas', 'briefcase']"
            />
            <span class="text-main-color">
              {{ card.company }}
            </span>
          </li>
          <li v-if="card.websites.length > 0" class="mb-2">
            <font-awesome
              class="mr-2 text-gray-700"
              :icon="['fas', 'external-link-alt']"
            />
            <a
              v-for="(website, index) in card.websites"
              :key="index"
              class="links text-main-color"
              :href="website"
              target="_blank"
            >
              {{ website.replace(/(^\w+:|^)\/\//, "") }}
            </a>
          </li>

          <li v-if="card.location" class="mb-2">
            <font-awesome
              class="mr-2 text-gray-700"
              :icon="['fas', 'map-marker-alt']"
            />
            <span class="text-main-color">
              {{ card.location }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <Modal :link="card.link" :showModal="showModal" @onClose="handleClose" />
  </div>
</template>

<script>
import Modal from "~/components/custom/Modal.vue";
export default {
  props: ["card"],
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  computed: {
    img() {
      if (this.card.image.src)
        return "background-image:url(" + this.card.image.src + ")";
      return this.card.image;
    },
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    handleClose() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.newCard {
  min-height: 540px;
}

ul {
  list-style: none;
}

.links::after {
  content: ",";
}

.links:last-child::after {
  content: "";
}
</style>