<template>
  <nav class="relative pt-4 pb-8 text-sm px-4">
    <div class="container mx-auto flex justify-between h-12 items-center">
      <div class="w-full md:w-1/2 text-center md:text-left">
        Made with 🖤 by {{ $static.metadata.siteAuthor }} | {{ currentYear }}
      </div>

      <div class="w-full justify-end text-center hidden md:flex md:text-left">
        <span>Built with</span>

        <ul class="list-none ml-1 flex external-link">
          <li
            :key="element.name"
            v-for="(element, index) in $static.metadata.navigation"
            v-bind:class="{
              'mr-1':
                index != Object.keys($static.metadata.navigation).length - 1,
            }"
          >
            <span class="mr-1" v-if="(0 !== index)">&</span>
            <a
              :href="element.link"
              v-if="element.external"
              target="_blank"
              rel="noopener noreferrer"
              >{{ element.name }}</a
            >
            <g-link v-else :to="element.link">{{ element.name }}</g-link>
          </li>
        </ul>
        <span class="mx-1">|</span>
        <a href="/sitemap.xml" target="_blank" title="sitemap">sitemap</a>
      </div>
    </div>
  </nav>
</template>

<static-query>
query {
  metadata {
    siteAuthor
    navigation : footerNavigation {
      name
      link
      external
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
body[data-theme='light'] {
  nav {
    background-color: #fefefefe;
    color: #555555;
    .logo {
      filter: invert(100%);
    }
    .external-link a:hover {
      color: black;
    }
  }
}
body[data-theme='dark'] {
  nav {
    background-color: black;
    color: white;
    .external-link a:hover {
      color: #555555;
    }
  }
}
</style>
