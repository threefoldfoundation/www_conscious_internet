(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{VVxJ:function(t,e,r){"use strict";r("kaVB")},XGVr:function(t,e,r){"use strict";r.r(e);r("07d7"),r("rB9j"),r("PKPk"),r("hByQ"),r("3bBZ"),r("Kz25");function s(t){if(t){t.src="https://data.threefold.io/"+t.src;for(var e=0;e<t.srcset.length;e++)t.srcset[e]="https://data.threefold.io/"+t.srcset[e]}return t}var a={props:{record:{},border:{type:Boolean,default:!0}},computed:{img:function(){return s(this.record.image)},authors:function(){if(this.record.authors){for(var t=0;t<this.record.authors.length;t++)this.record.authors[t].image=s(this.record.authors[t].image);return this.record.authors}},path:function(){return this.pathPrefix?this.pathPrefix+"/"+this.record.id:this.record.path}}},i=(r("qGnc"),r("KHd+")),o={metaInfo:{title:"Search"},data:function(){return{q:"",objects:{},loading:!0}},computed:{searchResults:function(){var t=this.q;if(t.length<3)return[];for(var e=this.$search.search({query:t,limit:5}),r=[],s=0;s<e.length;s++){var a=e[s];r.push({node:this.objects[a.path]})}return r},contentHeight:function(){return window.innerHeight-128}},mounted:function(){this.q=new URL(location.href).searchParams.get("query");for(var t=0;t<this.$page.projects.edges.length;t++){var e=this.$page.projects.edges[t];this.objects[e.node.path]=e.node}for(t=0;t<this.$page.people.edges.length;t++){e=this.$page.people.edges[t];this.objects[e.node.path]=e.node}for(t=0;t<this.$page.blogs.edges.length;t++){e=this.$page.blogs.edges[t];this.objects[e.node.path]=e.node}this.loading=!1},components:{SearchListItem:Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex search-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[r("g-link",{staticClass:"post-card-image-link",attrs:{to:t.record.path}},[r("g-image",{staticClass:"post-card-image",attrs:{src:t.img,alt:t.record.title}})],1),r("div",{staticClass:"p-5"},[r("g-link",{attrs:{to:t.record.path}},[r("h2",{staticClass:"post-card-title mt-3"},[t._v(t._s(t.record.title||t.record.name))]),r("p",{staticClass:"post-card-excerpt"},[t._v(t._s(t.record.excerpt))]),r("section",{staticClass:"post-tags container mx-auto relative py-1"},t._l(t.record.memberships,(function(e){return r("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)]),r("div",{staticClass:"w-full post-card-meta pt-2"},[r("div",{staticClass:"avatars"},[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"flex justify-between items-center"},[r("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.authors,(function(t){return r("li",{key:t.id,staticClass:"author-list-item"},[r("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[r("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.image,alt:t.name}})],1)],1)})),0)]),r("div",{staticClass:"flex flex-col text-xs leading-none uppercase"},[r("p",[r("g-link",{attrs:{to:t.record.path}},[r("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])])],1),r("p",[r("g-link",{attrs:{to:t.record.path}},[r("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.startDate))])]),t._v("\n              "+t._s(t.record.status)+"\n            ")],1)])]),r("section",{staticClass:"post-tags container mx-auto relative py-3"},t._l(t.record.tags,(function(e){return r("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)])])],1)],1)}),[],!1,null,"a4b339de",null).exports}},n=(r("VVxJ"),null),c=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"container sm:pxi-0 mx-auto",style:{"min-height":t.contentHeight+"px"}},[t.loading?r("img",{staticClass:"m-auto",attrs:{src:"/img/loader.gif",alt:""}}):t._e(),t.searchResults.length>0?r("div",{staticClass:"flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4"},t._l(t.searchResults,(function(t){return r("SearchListItem",{key:t.node.id,attrs:{record:t.node}})})),1):r("div",{staticClass:"flex flex-col with-large my-auto text-center py-20"},[r("h1",{},[t._v("No results")]),r("p",[t._v("OOPS! Something went wrong here")])])])])}),[],!1,null,"2ceb09e8",null);"function"==typeof n&&n(c);e.default=c.exports},itWU:function(t,e,r){},kaVB:function(t,e,r){},qGnc:function(t,e,r){"use strict";r("itWU")}}]);