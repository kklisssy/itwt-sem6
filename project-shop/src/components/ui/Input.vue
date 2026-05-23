<template>
  <input
    class="ui-input"
    :class="{ 'ui-input-pill': pill }"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :aria-label="ariaLabel || placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="js">
defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  ariaLabel: {
    type: String,
    default: "",
  },
  pill: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped lang="css">
.ui-input {
  width: 100%;
  min-height: 45px;
  padding: 12px 17px;
  border: 1px solid #a4a4a4;
  background-color: #ffffff;
  font-size: 13px;
  line-height: 1.2;
  color: #222222;
}

.ui-input::placeholder {
  color: #b1b1b1;
}

.ui-input-pill {
  min-height: 49px;
  padding-inline: 22px;
  border: none;
  border-radius: 24px;
  background-color: #e1e1e1;
}
</style>
