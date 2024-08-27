<script setup lang="ts">
const props = defineProps<{
  modelValue: number;
}>();

const emit = defineEmits(["update:modelValue"]);

const handleInput = (rating: number) => {
  emit("update:modelValue", rating);
};

const emojiRatings = {
  1: { value: 1, emoji: "❤" },
  2: { value: 2, emoji: "👍" },
  3: { value: 3, emoji: "😐" },
  4: { value: 4, emoji: "🙄" },
  5: { value: 5, emoji: "😫" },
  6: { value: 6, emoji: "🤢" },
};
</script>

<template>
  <div class="flex flex-row justify-between">
    <UButton
      v-for="emojiRating in emojiRatings"
      :key="emojiRating.value"
      variant="link"
      @click="handleInput(emojiRating.value)"
    >
      <Twemoji
        :emoji="emojiRating.emoji"
        size="1.7em"
        :class="
          emojiRating.value !== modelValue ? 'brightness-50' : 'animate-bounce'
        "
      />
    </UButton>
  </div>
</template>
