<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <TagFilterHeader
      :tags="memberships"
      :selected="$page.membership.title"
      v-if="$page.allMembership.edges.length > 1"
    />
    <div class="container sm:pxi-0 mx-auto mt-8 overflow-x-hidden">
      <div class="mx-4 sm:mx-0">
        <h1 class="pb-0 mb-0 text-5xl font-medium capitalize">
          {{ $page.membership.title.replace("_", " ") }}
        </h1>
        <p class="text-gray-700 text-xl">
          <span class="self-center"
            >{{ $page.membership.belongsTo.totalCount }} People</span
          >
        </p>
        <p v-if="readMore_link">
          Learn more about {{ $page.membership.title.replace("_", " ") }}
          <a :href="readMore_link" target="_blank" class="read_more"> Here </a>
        </p>
      </div>

      <div class="pt-8 border-b"></div>

      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.membership.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
    <div class="pagination flex justify-center mb-8">
      <Pagination
        v-if="
          $page.membership.belongsTo.pageInfo.totalPages > 1 &&
          $page.membership.belongsTo.edges.length > 0
        "
        :baseUrl="$page.membership.path"
        :currentPage="$page.membership.belongsTo.pageInfo.currentPage"
        :totalPages="$page.membership.belongsTo.pageInfo.totalPages"
        :maxVisibleButtons="5"
      />
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page: Int) {
    membership(id: $id) {
      title
      path
      belongsTo(perPage: 10, page: $page) @paginate {
      totalCount
      pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Person {
               path
              content
              name
              rank
              memberships{
                id
                title
                path
              }
              bio
              excerpt
              linkedin
              websites
              countries
              cities
              private
              image
            }
          }
        }
      }
    }  

   allMembership(filter: {title: {in: ["cofounders", "tech", "foundation", "ambassadors", "matchmakers", "farmers", "aci_members", "partners", "wisdom_council", "technology_council", "grid_guardians"]}}){
     edges{
      node{
        id
        title
        path
      }
    }
  }

  }
</page-query>

<script>
import PostListItem from "~/components/custom/Cards/PostListItem.vue";
import TagFilterHeader from "~/components/custom/TagFilterHeader.vue";
import Pagination from "~/components/custom/Pagination.vue";

export default {
  components: {
    PostListItem,
    TagFilterHeader,
    Pagination,
  },

  computed: {
    memberships() {
      var res = [{ title: "All", path: "/people" }];
      this.$page.allMembership.edges.forEach((edge) =>
        res.push({ title: edge.node.title, path: edge.node.path })
      );
      return res;
    },
    readMore_link() {
      if (this.$page.membership.title == "grid_guardians") {
        return "https://threefold.io/info/threefold#/threefold__grid_guardians";
      } else if (this.$page.membership.title == "technology_council") {
        return "https://threefold.io/info/threefold#/threefold__technology_council";
      } else if (this.$page.membership.title == "wisdom_council") {
        return "https://threefold.io/aci/wisdomcouncil";
      }
    },
  },
  metaInfo() {
    return {
      title: this.$page.membership.title,
    };
  },
};
</script>

<style scoped>
.read_more {
  color: #70cfc7;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
