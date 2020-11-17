<template>
  <div class="flex flex-col space-y-2 w-1/4">
    <input
      v-model="value"
      class="border-2 border-solid border-black px-1"
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class BrokenBaseInput extends Vue {
  @Prop({ required: true })
  value!: string
}
</script>
