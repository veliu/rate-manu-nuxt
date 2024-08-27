<script setup lang="ts">
const props = defineProps<{
  initialRating: number;
}>();

const initialValue = ref(props.initialRating);

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
      @click="$emit('update-rating', emojiRating.value)"
    >
      <Twemoji
        :emoji="emojiRating.emoji"
        size="1.7em"
        :class="
          emojiRating.value !== initialValue
            ? 'brightness-50'
            : 'animate-bounce'
        "
      />
    </UButton>
  </div>
</template>
