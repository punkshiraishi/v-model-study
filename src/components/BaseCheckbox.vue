<template>
  <div>
    <input
      type="checkbox"
      :value="checked"
      @change="cheked = $event.target.value"
    >
    {{ checked }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class BaseCheckbox extends Vue {
  checked = true
}
</script>
