<template>
  <div>
    <p>Name</p>
    <BaseInput v-model="value.name" />

    <p>Email</p>
    <BaseInput v-model="value.email" />

    <p>Address</p>
    <BaseInput v-model="value.address" />
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
}
</script>
