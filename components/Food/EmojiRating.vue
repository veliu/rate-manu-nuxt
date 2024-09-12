<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    ratingValue: number;
  }>(),
  {
    ratingValue: 0,
  },
);

const emojiRatings = [
  { value: 0, emoji: "🤷" },
  { value: 1, emoji: "❤" },
  { value: 2, emoji: "👍" },
  { value: 3, emoji: "😐" },
  { value: 4, emoji: "🙄" },
  { value: 5, emoji: "😫" },
  { value: 6, emoji: "🤢" },
];
</script>
<template>
  <div>
    <Twemoji :emoji="emojiRatings[ratingValue].emoji" size="2em" />
  </div>
</template>
