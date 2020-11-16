<template>
  <div class="flex space-x-3 border-b">
    <router-link
      v-for="page in pages"
      :key="page"
      :class="[
        'font-semibold text-lg px-4 py-2 -mb-px box-border',
        page === $route.name ? 
          'text-blue-900 border-l border-t border-r rounded-t bg-white' : 
          'text-blue-600',
      ]"
      :to="{ name: page }"
    >
      <slot>
        {{ page }}
      </slot>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class PageNavigator extends Vue {
  @Prop({ default: () => [] })
  pages!: string[]
}
</script>
