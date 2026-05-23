<template>
  <button
    class="ui-button"
    :class="[`ui-button-${variant}`, { 'ui-button-block': block }]"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="js">
defineProps({
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "outline", "ghost", "light"].includes(value),
  },
  block: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="css">
.ui-button {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 24px;
  border: 1px solid transparent;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;
}

.ui-button:hover {
  opacity: 0.88;
}

.ui-button-primary {
  background-color: var(--color-accent);
  color: #ffffff;
}

.ui-button-outline {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.ui-button-outline:hover {
  background-color: var(--color-accent);
  color: #ffffff;
}

.ui-button-ghost {
  border-color: #a4a4a4;
  color: #000000;
}

.ui-button-light {
  background-color: #ffffff;
  color: var(--color-text);
}

.ui-button-block {
  width: 100%;
}
</style>
