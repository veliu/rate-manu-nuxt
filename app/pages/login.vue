<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "@nuxt/ui";
import { useUser } from "~/composables/useUser";
import type { LoginCheckRequest } from "ratemanu-api-client";

const isLoading = ref(false);

const { login } = useUser();

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const fields = [
  {
    name: "email",
    type: "text" as const,
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password" as const,
    placeholder: "Enter your password",
  },
  {
    name: "remember",
    label: "Remember me",
    type: "checkbox" as const,
  },
];

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  isLoading.value = true;

  const credentials: LoginCheckRequest = {
    username: event.data.email,
    password: event.data.password,
  };

  await login(credentials);

  isLoading.value = false;
};
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        title="Sorry!"
        icon="i-lucide-lock"
        :submit="{ loading: isLoading, label: 'Sign in' }"
        @submit="onSubmit"
      >
        <template #description>
          Public access is currently restricted
        </template>
        <template #footer>
          By signing in, you agree to our
          <ULink to="#" class="text-primary font-medium">Terms of Service</ULink
          >.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
