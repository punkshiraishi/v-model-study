<template>
  <div class="flex flex-col p-5 space-y-5">
    <h1>BaseInput</h1>
    <BaseInput v-model="text" />

    <h1>SampleForm NG</h1>
    <SampleFormNG :value="user1" />
    <pre>{{ user1 }}</pre>

    <h1>SampleForm</h1>
    <SampleForm :value="user2" />
    <pre>{{ user2 }}</pre>
  </div>
</template>

<script lang="ts">
import BaseInput from "@/components/BaseInput.vue"
import SampleForm from "@/components/SampleForm.vue"
import SampleFormNG from "@/components/SampleFormNG.vue"
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {
    BaseInput,
    SampleForm,
    SampleFormNG,
  },
})
export default class InputPage extends Vue {
  text = ""
  user1 = { name: "test", email: "test", address: "test" }
  user2 = { name: "test", email: "test", address: "test" }
}
</script>

<style scoped lang="scss" ></style>