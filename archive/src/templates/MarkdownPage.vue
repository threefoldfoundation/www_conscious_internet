<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <Header
        v-if="$page.markdownPage.header_title"
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$url($page.markdownPage.link)"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.header"
        :header="$page.markdownPage.header"
      />

      <g-image
        v-if="$page.markdownPage.solution_image"
        :src="$page.markdownPage.solution_image.src"
      />

      <Comparison
        v-if="
          $page.markdownPage.comparisonSecs &&
          $page.markdownPage.comparisonSecs.length > 0
        "
        :main="$page.markdownPage.comparisonMain"
        :sections="$page.markdownPage.comparisonSecs"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.headerSolution"
        :header="$page.markdownPage.headerSolution"
      />

      <VerticalNav
        :slides="$page.markdownPage.slides"
        v-if="$page.markdownPage.slides && $page.markdownPage.slides.length > 0"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.headerSolution2"
        :header="$page.markdownPage.headerSolution2"
      />

      <!-- <ShowcaseProducts
        v-if="
          $page.markdownPage.productData &&
          $page.markdownPage.productData.length > 0
        "
        :id="$page.markdownPage.id"
        :main="$page.markdownPage.productsMain"
        :products="$page.markdownPage.productData"
      /> -->

      <!-- <NewCard
        v-for="card in $page.markdownPage.cards"
        :key="card.id"
        :card="card"
      /> -->

      <!-- <HowItWorks
        v-if="$page.markdownPage.howItWorks.length > 0"
        :HIWData="$page.markdownPage.howItWorks"
        :main="$page.markdownPage.howItWorksMain"
      /> -->

      <!-- <Features
        v-if="$page.markdownPage.features.length > 0"
        :main="$page.markdownPage.featuresMain"
        :features="$page.markdownPage.features"
      /> -->

      <!-- <HowItWorks
        v-if="$page.markdownPage.howItWorks.length > 0"
        :HIWData="$page.markdownPage.howItWorks"
        :main="$page.markdownPage.howItWorksMain"
      /> -->

      <!-- <logoShowcase
        v-if="$page.markdownPage.logos"
        :logos="$page.markdownPage.logos"
      /> -->

      <CallToAction
        v-if="$page.markdownPage.cta"
        :cta="$page.markdownPage.cta"
      />

      <!-- <SignUp
        v-if="$page.markdownPage.signup"
        :signup="$page.markdownPage.signup"
      /> -->

      <!-- <InTheNews
        v-if="$page.markdownPage.inTheNews"
        :news="$page.markdownPage.inTheNews"
      /> -->
    </div>
    <div class="container-fluid sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          :showtags="true"
          v-for="person in $page.markdownPage.productData"
          :key="person.id"
          :record="person"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    markdownPage(id: $id) {
        id
        path
        content
        metaTitle
        metaDesc
        metaImg
        header_excerpt
        header_altImg
        header_title
        header_image
        button
        link
        solution_image
        slides{
          id
          title
          content
          image
          order
        }
        cards{
          id
          title
          image
          button
          link
          order
          content
          company
          websites
          location
        }
        header{
          title
          subtitle
          content
          btn1
          link1
          btn2
          link2
        }
        headerSolution{
          subtitle
          content
        }
        headerSolution2{
          subtitle
          content
        }
        comparisonMain{
          id
          title
          description
          button
          link
        }
        comparisonSecs{
          id
          svg
          title
          content
        }
        howItWorksMain{
          id
          title
          image
        }
        howItWorks{
          id
          title
          content
        }
        featuresMain{
          id
          title
          btn
          link
          content
        }
        features{
          id
          title
          svg
          content
        }
        productsMain{
          id
          title
          subtitle
          content
          button
          link
          image
        }
        productData{
          id
          title
          content
          image
          button
          link
        }
        logos{
          id
          image
        }
        cta{
          id
          title
          content
          button
          link
        }
        signup{
          id
          title
          button1
          link1
          button2
          link2
        }
    }
  }

</page-query>

<script>
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import VerticalNav from "~/components/custom/Navbar/VerticalNav.vue";
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import Comparison from "~/components/custom/sections/Comparison.vue";
import HowItWorks from "~/components/custom/sections/HowItWorks.vue";
import Features from "~/components/custom/sections/Features.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";
import WisdomCouncilMemebersGrid from "~/components/marketing/sections/logo-clouds/off_white_grid.vue";
import ShowcaseProducts from "~/components/marketing/sections/cta-sections/ShowcaseProducts.vue";
import PostListItem from "~/components/custom/NewPostListItem.vue";

export default {
  components: {
    NewCard,
    Comparison,
    Header,
    VerticalNav,
    SolutionsHeader,
    ShowcaseProducts,
    HowItWorks,
    Features,
    logoShowcase,
    CallToAction,
    SignUp,
    PostListItem,
    WisdomCouncilMemebersGrid,
  },
  // mounted() {
  //   console.log(this.$page.markdownPage.productData);
  // },
  metaInfo() {
    return {
      title: "",
      titleTemplate: this.$page.markdownPage.metaTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.markdownPage.metaTitle,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getImg,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.markdownPage.metaTitle,
        },
      ],
    };
  },
  computed: {
    getImg() {
      let image = "";
      if (process.isClient) {
        image = `${window.location.origin}${this.img}`;
      }
      return image;
    },
    img() {
      if (!this.$page.markdownPage.metaImg) return "";
      if (this.$page.markdownPage.metaImg.src)
        return this.$page.markdownPage.metaImg.src;
      return this.$page.markdownPage.metaImg;
    },
  },
};
</script>
<style scoped>
/**
 * Add back the container background-color, border-radius, padding, margin
 * and overflow that we removed from <pre>.
 */

.gridsome-highlight {
  background-color: #fdf6e3;
  border-radius: 0.3em;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
}
.gridsome-highlight-code-line {
  background-color: #feb;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid #f99;
}

/**
 * Remove the default PrismJS theme background-color, border-radius, margin,
 * padding and overflow.
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .gatsby-highlight.
 * 3. Adjust the position of the line numbers
 */
.gridsome-highlight pre[class*="language-"] {
  background-color: transparent;
  margin: 0;
  padding: 0;
  overflow: initial;
  float: left; /* 1 */
  min-width: 100%; /* 2 */
}

/* Adjust the position of the line numbers */
.gridsome-highlight pre[class*="language-"].line-numbers {
  padding-left: 2.8em;
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
