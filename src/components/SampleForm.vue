<template>
  <div>
    <p>Name</p>
    <BaseInput
      :value="value.name"
      @input="onInput({ name: $event })"
    />

    <p>Email</p>
    <BaseInput
      :value="value.email"
      @input="onInput({ email: $event })"
    />

    <p>Address</p>
    <BaseInput
      :value="value.address"
      @input="onInput({ address: $event })"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import BaseInput from "./BaseInput.vue"

interface User {
  name: string
  email: string
  address: string
}

@Component({
  components: {
    BaseInput,
  },
})
export default class SampleForm extends Vue {
  @Prop({ default: {} })
  value!: User

  onInput(event: { key: string }): void {
    this.$emit("input", {
      ...this.value,
      ...event,
    })
  }
}
</script>
