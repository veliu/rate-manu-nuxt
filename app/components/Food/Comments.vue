<script setup lang="ts">
import type { Food } from "~/types/ApiTypes";
import { useFoodComment } from "~/composables/useFoodComment";
import { useSessionStore } from "~/store/session.store";

const props = defineProps<{
  food: Food;
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
  <UContainer>
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
      placeholder="Add Comment..."
      v-model="newComment"
      @submit="invokeCreateComment"
    >
      <UChatPromptSubmit />
    </UChatPrompt>
  </UContainer>
</template>
