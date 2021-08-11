<template>
  <div class="flex flex-post px-0 sm:px-4 pb-8 mb-8">
    <g-link :to="record.link" class="post-card-image-link">
      <g-image
        :src="img(record.image)"
        :alt="record.title"
        class="post-card-image"
      ></g-image>
    </g-link>
    <div>
      <h2 class="post-card-title mt-3">{{ record.title || record.name }}</h2>
      <div
        class="post-card-excerpt text-gray-700 inline-block"
        v-html="content"
      ></div>
      <g-link :to="record.link"> Read more</g-link>

      <div class="w-full post-card-meta pt-2">
        <div class="avatars">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <ul class="list-none flex author-list m-0">
                <li
                  v-for="author in record.authors"
                  :key="author.id"
                  class="author-list-item"
                >
                  <g-link :to="author.path" v-tooltip="author.name">
                    <g-image
                      :src="img(author.image)"
                      :alt="author.name"
                      class="
                        w-8
                        h-8
                        rounded-full
                        bg-gray-200
                        border-2 border-white
                      "
                    />
                  </g-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {},
  },

  computed: {
    content() {
      if (this.record.content.length < 200) {
        return this.record.content;
      } else {
        return this.record.content.slice(0, 200) + "...";
      }
    },
  },
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.post-card-excerpt {
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
}

.post-card-image {
  max-width: 100%;
  /* height: auto; */
}

a {
  color: #70cfc7;
}
</style>
