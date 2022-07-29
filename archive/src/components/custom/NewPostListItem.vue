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
.flex-post {
  border-bottom-width: 1px;
  border-bottom-color: #e2e8f0;
  flex-direction: column;
  width: 62%;
  flex: 1 1 250px;
}
/* @media (min-width: 768px) {
  .flex-post .post-card-image {
    height: 14rem;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 0.25rem;
    position: relative;
  }
  .flex-post:nth-child(3n) .post-card-image,
  .flex-post:nth-child(7n-1) .post-card-image,
  .flex-post:nth-child(7n-2) .post-card-image {
    position: absolute;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  .flex-post:nth-child(7n),
  .flex-post:nth-child(7n-1),
  .flex-post:nth-child(7n-2) {
    flex: 1 1 33%;
    flex-direction: column;
  }
  .flex-post:nth-child(7n) .post-card-image-link,
  .flex-post:nth-child(7n-1) .post-card-image-link,
  .flex-post:nth-child(7n-2) .post-card-image-link {
    position: relative;
    min-height: 400px;
  }
  .flex-post:nth-child(7n) .post-card-image,
  .flex-post:nth-child(7n-1) .post-card-image,
  .flex-post:nth-child(7n-2) .post-card-image {
    position: absolute;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  .flex-post:nth-child(7n) .post-card-title,
  .flex-post:nth-child(7n-1) .post-card-title,
  .flex-post:nth-child(7n-2) .post-card-title {
    font-size: 1.25rem;
  }
  .flex-post:nth-child(7n) .post-card-excerpt,
  .flex-post:nth-child(7n-1) .post-card-excerpt,
  .flex-post:nth-child(7n-2) .post-card-excerpt {
    font-size: 1.25rem;
  }
} */
</style>
