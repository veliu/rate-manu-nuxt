<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import type { LoginRequest, Token } from "~/types/ApiTypes";

const isLoading = ref(false);

const { $api } = useNuxtApp();
const toast = useToast();

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: "",
  password: "",
});

const errorMessage = ref("");

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  isLoading.value = true;
  const credentials: LoginRequest = {
    username: event.data.email,
    password: event.data.password,
  };

  const { data, status, error } = await $api.auth.login(credentials);

  if (status.value === "error") {
    if (error.value?.statusCode === 401) {
      errorMessage.value = "Authentication failed!";
    }
    toast.add({
      id: "login-failed",
      title: "Failed",
      description: errorMessage.value,
      icon: "i-heroicons-exclamation-triangle",
      color: "red",
    });
  }

  if (status.value === "success") {
    const loginResponse = data.value as Token;
    const loginCookie = useCookie("ratemanu-login");
    loginCookie.value = JSON.stringify(loginResponse);
    navigateTo("/");
    toast.add({
      id: "login-success",
      title: "Welcome!",
      icon: "i-heroicons-face-smile",
    });
  }
  isLoading.value = false;
};
</script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <NuxtImg
        src="apple-touch-icon.png"
        class="mx-auto h-10 w-auto"
        alt="RateManu Logo"
      />
      <h2
        class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-primary-500"
      >
        Sign in to your account
      </h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton :loading="isLoading" type="submit"> Submit </UButton>
      </UForm>
    </div>
    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      {{ " " }}
      <ULink
        to="/register"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-200"
      >
        Register now
      </ULink>
    </p>
  </div>
</template>
