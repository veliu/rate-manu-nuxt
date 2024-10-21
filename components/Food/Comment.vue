<script setup lang="ts">
import type { FoodComment } from "~/types/ApiTypes";
import { useUser } from "~/composables/useUser";
import { useSessionStore } from "~/store/session.store";

const props = defineProps<{
  foodComment: FoodComment;
}>();

const comment = toRef<FoodComment>(props.foodComment);

const { user: me } = storeToRefs(useSessionStore());

const formattedDate = computed(() => {
  const date = new Date(comment.value.createdAt);
  return date.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

console.log(me.value);
const isMyComment = computed(() => me.value?.id === comment.value.author);
</script>

<template>
  <div class="flex flex-col gap-4 border-4 border-gray-700 rounded-xl my-4">
    <div class="text-xs text-gray-primary border-b-4 border-gray-700 p-2">
      <span v-if="isMyComment">You</span>
      <span v-else>{{ comment.author }}</span>
      <span> commented on {{ formattedDate }}</span>
    </div>
    <div class="p-2 text-lg">
      {{ comment.comment }}
    </div>
  </div>
</template>
