<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { type InferType, object, string } from "yup";
import type { InviteUserToGroupRequest } from "~/types/ApiTypes";

const props = defineProps<{
  groupId: string;
}>();

const { $api } = useNuxtApp();

const schema = object({
  email: string().email("Invalid email").required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: "",
});

const isLoading = ref(false);

const invited = ref(false);

const onSubmitGroupInvite = async (event: FormSubmitEvent<Schema>) => {
  isLoading.value = true;

  const request: InviteUserToGroupRequest = {
    email: event.data.email,
    group: props.groupId,
  };

  const { status } = await $api.user.inviteUserToGroup(request);

  invited.value = status.value === "success";
  isLoading.value = !(status.value === "success");
};
</script>

<template>
  <div>
    <UForm :schema="schema" :state="state" @submit="onSubmitGroupInvite">
      <UFormGroup
        label="Invite a group member"
        help="The user will receive an email invitation "
        name="email"
      >
        <div class="flex flex-row gap-4">
          <UInput
            v-model="state.email"
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
            :loading="isLoading"
          />
        </div>
      </UFormGroup>
    </UForm>
  </div>
</template>

<style scoped></style>
