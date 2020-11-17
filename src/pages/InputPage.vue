<template>
  <div class="flex flex-col p-5 space-y-5" />
</template>

<script lang="ts">
import BaseInput from "@/components/BaseInput.vue"
import SampleForm from "@/components/SampleForm.vue"
import BrokenSampleForm from "@/components/BrokenSampleForm.vue"
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {
    BaseInput,
    SampleForm,
    BrokenSampleForm,
  },
})
export default class InputPage extends Vue {}
</script>

<style scoped lang="scss" ></style>