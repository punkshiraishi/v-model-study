<template>
  <div class="flex flex-col p-5 space-y-5">
    <div class="flex flex-col p-5 space-y-3">
      <span class="text-xl font-bold">
        壊れた BaseInput
      </span>
      <BrokenBaseInput v-model="text1" />
      <pre>{{ text1 }}</pre>
    </div>

    <div class="flex flex-col p-5 space-y-3">
      <span class="text-xl font-bold">
        正しい BaseInput
      </span>
      <BaseInput v-model="text2" />
      <pre>{{ text2 }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import BaseInput from "@/components/BaseInput.vue"
import BrokenBaseInput from "@/components/BrokenBaseInput.vue"
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {
    BaseInput,
    BrokenBaseInput,
  },
})
export default class InputPage extends Vue {
  text1 = "test"

  text2 = "test"
}
</script>

<style scoped lang="scss" ></style>