<script setup lang="ts">
import { useFoodComment } from "~/composables/useFoodComment";
import { useSessionStore } from "~/store/session.store";
import type { FoodResponse } from "ratemanu-api-client";

const props = defineProps<{
  food: FoodResponse;
}>();

const food = toRef(props.food);

const { user } = useSessionStore();

const { comments, addComment } = useFoodComment(food);

const newComment = ref<string>("");

type Message = {
  id: string;
  role: "system" | "user" | "assistant" | "data";
  content: string;
  createdAt: Date;
};

const messages = computed<Message[]>(() => {
  return comments.value.map((c) => ({
    id: c.id,
    role: c.author === user?.id ? "user" : "assistant",
    content: c.comment,
    createdAt: new Date(c.createdAt),
  }));
});

const invokeCreateComment = async () => {
  await addComment(newComment);
  newComment.value = "";
};
</script>

<template>
  <UContainer class="border-1 border-secondary rounded-xl p-8">
    <h2 class="text-2xl font-bold mb-4">Comments</h2>
    <UChatMessages
      :user="{
        side: 'right',
        variant: 'solid',
        avatar: {
          src: 'https://github.com/benjamincanac.png',
        },
      }"
      :assistant="{
        side: 'left',
        variant: 'outline',
        avatar: {
          icon: 'i-lucide-user',
        },
      }"
      :messages="messages"
    />
    <UChatPrompt
      v-model="newComment"
      placeholder="Add Comment..."
      @submit="invokeCreateComment"
    >
      <UChatPromptSubmit />
    </UChatPrompt>
  </UContainer>
</template>
