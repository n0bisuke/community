<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        こんばんわ
      </h1>
      <h2 class="subtitle">
        My smashing Nuxt.js project
      </h2>

      <ul id="example-1">
        <li v-for="(item, index) in communityData" :key="index">
          名前: {{ item.name }}
          イベント数: {{ item.event }}
          累計: {{ item.total_member }}
          ユニーク: {{ item.uniq_member }}
        </li>
      </ul>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import communityData from '~/data/connpass.json'

// console.log(communityData);

export default {
  components: {
    Logo
  },

  data () {
    return {
      communityData: communityData
    }
  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
