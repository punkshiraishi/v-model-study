<template>
  <div class="flex flex-col p-5 space-y-5">
    <div class="flex flex-col p-5 space-y-3">
      <span class="text-xl font-bold">
        壊れた SampleForm
      </span>
      <SampleForm v-model="user1" />
      <pre>{{ user1 }}</pre>
    </div>

    <div class="flex flex-col p-5 space-y-3">
      <span class="text-xl font-bold">
        正しい SampleForm
      </span>
      <SampleForm v-model="user2" />
      <pre>{{ user2 }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import SampleForm from "@/components/SampleForm.vue"
import BrokenSampleForm from "@/components/BrokenSampleForm.vue"
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {
    SampleForm,
    BrokenSampleForm,
  },
})
export default class FormPage extends Vue {
  user1 = {
    name: "shiraishi",
    email: "shiraishi@shiraishi.com",
    address: "tokyo",
  }

  user2 = {
    name: "shiraishi",
    email: "shiraishi@shiraishi.com",
    address: "tokyo",
  }
}
</script>

<style scoped lang="scss" ></style>