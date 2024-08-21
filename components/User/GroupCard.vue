<script setup lang="ts">
import type { GroupResponse } from "~/types/GroupResponse";
import type { FormSubmitEvent } from "#ui/types";
import { type InferType, object, string } from "yup";

const props = defineProps<{
  group: GroupResponse;
}>();

const columns = [
  {
    key: "email",
    label: "Email",
  },
];

const selected = ref(undefined);

const { $api } = useNuxtApp();

const schema = object({
  email: string().email("Invalid email").required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: "",
});

const invited = ref(false);

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  const { status } = await $api.user.invite(event.data.email);
  console.log(status);
  invited.value = status.value === "success";
};
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex flex-row justify-between">
        <h3 class="pb-2">Group: {{ group.name }}</h3>
        <UBadge color="black" variant="solid" :label="group.role" />
      </div>

      <p class="text-xs font-italic">
        Member count: {{ group.members.length }}
      </p>
    </template>

    <div class="h-32">
      <UTable v-model="selected" :rows="group.members" :columns="columns" />
    </div>

    <template #footer>
      <UForm :schema="schema" :state="state" @submit="onSubmit">
        <UFormGroup
          label="Invite a group member"
          help="The user will receive an email invitation "
        >
          <div class="flex flex-row gap-2">
            <UInput
              :v-model="state.email"
              class="basis-2/3"
              placeholder="buddy@example.com"
              icon="i-heroicons-envelope"
            />
            <UButton
              type="submit"
              class="basis-1/3 justify-center"
              label="Invite"
              color="primary"
              variant="outline"
            />
          </div>
        </UFormGroup>
      </UForm>
    </template>
  </UCard>
</template>
