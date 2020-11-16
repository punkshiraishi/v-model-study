<template>
  <div class="flex flex-col space-y-2 p-5">
    <PageNavigator :pages="pages" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import PageNavigator from "./components/PageNavigator.vue"
@Component({
  components: { PageNavigator },
})
export default class App extends Vue {
  pages = ["top", "demo", "input"]
}
</script>
