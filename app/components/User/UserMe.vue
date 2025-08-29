<script setup lang="ts">
import { object, string } from "yup";
import type { UserResponse } from "~~/api/api";

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const props = defineProps<{
  user?: UserResponse | undefined;
}>();

const { user } = toRefs(props);

const schema = object({
  email: string().email("Invalid email").required("Required"),
  username: string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
});

const state = reactive({
  email: "",
  username: "",
});

state.email = user.value?.email ?? "";
state.username = user.value?.name ?? "";

const updateMode = ref(false);

const { updateMe, logout } = useUser();

const onSubmit = async () => {
  if (user.value?.name !== state.username) {
    user.value = await updateMe({ name: state.username });
  }
  updateMode.value = false;
};
</script>

<template>
  <div class="my-8 flex flex-col gap-4">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField label="Email" name="email">
        <UInput
          v-model="state.email"
          placeholder="dexter.morgan@miami.com"
          icon="i-heroicons-envelope"
          disabled
        />
      </UFormField>
      <UFormField label="Name" name="username">
        <div class="flex flex-row w-full gap-2">
          <UInput
            v-model="state.username"
            class="grow"
            placeholder="Dexter"
            :disabled="!updateMode"
            :class="{ 'bg-transparent': !updateMode }"
          />
          <UButton
            v-if="!updateMode"
            icon="i-heroicons-pencil-square"
            variant="outline"
            @click="() => (updateMode = true)"
          />
          <UButton
            v-if="updateMode"
            icon="i-heroicons-check"
            variant="outline"
            @click="onSubmit"
          />
        </div>
      </UFormField>
    </UForm>
    <div class="flex flex-row justify-between">
      <h2>Color Mode</h2>
      <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="primary"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
    </div>
    <div>
      <UButton color="error" label="Logout" @click="logout" />
    </div>
  </div>
</template>
