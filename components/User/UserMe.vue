<script setup lang="ts">
import { type InferType, object, string } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import type { PutMeRequest, User } from "~/types/ApiTypes";

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
  user: User;
}>();

const schema = object({
  email: string().email("Invalid email").required("Required"),
  username: string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: "",
  username: "",
});

state.email = props.user.email;
state.username = props.user.name ?? "";

const { $api } = useNuxtApp();

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  const request: PutMeRequest = {
    name: event.data.username,
  };

  const { error, status, data: response } = await $api.user.putMe(request);

  if (status.value === "success") {
    state.email = <string>response?.value?.email;
    state.username = <string>response?.value?.name;
  } else {
    console.log(error);
  }
};
</script>

<template>
  <div class="my-8 flex flex-col gap-4">
    <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-4">
      <UFormGroup label="Email" name="email">
        <UInput
          placeholder="dexter.morgan@miami.com"
          icon="i-heroicons-envelope"
          v-model="state.email"
          disabled
        />
      </UFormGroup>
      <UFormGroup label="Name" name="username">
        <UInput placeholder="Dexter" v-model="state.username" />
      </UFormGroup>
      <UButton class="justify-center" type="submit" label="Submit" />
    </UForm>
    <UDivider />
    <div class="flex flex-row justify-between">
      <h2>Darstellung</h2>
      <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
    </div>
  </div>
</template>
