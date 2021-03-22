<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <Header
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$url($page.markdownPage.link)"
      /> 

      <HowItWorks
        v-if="$page.markdownPage.howItWorks.length > 0"
        :HIWData="$page.markdownPage.howItWorks"
        :main="$page.markdownPage.howItWorksMain"
      />

      <!-- <SolutionsHeader
        v-if="$page.markdownPage.header"
        :header="$page.markdownPage.header"
      /> -->

      <!-- <SolutionsHeader
        v-if="$page.markdownPage.headerSolution"
        :header="$page.markdownPage.headerSolution"
      /> -->

      <!-- <Features
        :main="$page.markdownPage.featuresMain"
        :features="$page.markdownPage.features"
      /> -->

    <!-- <g-image
      v-if="$page.markdownPage.solution_image"
      :src="$page.markdownPage.solution_image.src"
    /> -->
    </div>

    <!-- <logoShowcase
      v-if="$page.markdownPage.logos.length > 0"
      :logos="$page.markdownPage.logos"
    /> -->

    <!-- <InTheNews
      v-if="$page.markdownPage.inTheNews"
      :news="$page.markdownPage.inTheNews"
    /> -->

    <!-- <SignUp
      :signup="$page.markdownPage.signup"
      v-if="$page.markdownPage.signup"
    /> -->

    <CallToAction 
      v-if="$page.markdownPage.cta" 
      :cta="$page.markdownPage.cta" 
    />
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        content
        header_title
        header_image
        header_excerpt
        button
        link
      # solution_image
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
        logos{
          id
          image
          url
        }
        signup{
          id
          title
          button1
          link1
          button2
          link2
        }
        cta{
          id
          title
          content
          button
          link
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
        inTheNews {
          id
          content
          partners {
            path
            logo
          }
        }
    }
  }

</page-query>

<script>
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import Features from "~/components/custom/sections/Features.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import InTheNews from "~/components/marketing/sections/logo-clouds/off_white_grid.vue";
import HowItWorks from "~/components/custom/sections/HowItWorks.vue";

export default {
  components: {
    SolutionsHeader,
    HowItWorks,
    Header,
    Features,
    logoShowcase,
    SignUp,
    CallToAction,
    InTheNews,
  },
  metaInfo: {
    title: "",
    titleTemplate: "ACI",
 
  },
};
</script>
<style scoped>
/* h2 {
  padding-bottom: 8rem;
} */
</style> >
