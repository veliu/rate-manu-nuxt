<script setup lang="ts">
import { object, string } from "yup";

const props = defineProps<{
  groupId: string;
}>();

const groupId = toRef(props.groupId);

const schema = object({
  email: string().email("Invalid email").required("Required"),
});

const state = reactive({
  email: "",
});

const { inviteUserToGroup } = useGroups();

const isLoading = ref(false);

const onSubmitGroupInvite = async () => {
  isLoading.value = true;

  await inviteUserToGroup({
    email: state.email,
    group: groupId.value,
  });

  isLoading.value = false;
};
</script>

<template>
  <div>
    <UForm
      :schema="schema"
      :state="state"
      @submit.prevent="onSubmitGroupInvite"
    >
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
