<script setup lang="ts">
import type {
  SearchCriteria,
  GroupResponse,
  GroupMember,
} from "~/types/ApiTypes";

const props = defineProps<{ modelValue: SearchCriteria }>();
const searchCriteria = toRef(props.modelValue);
const emit = defineEmits(["update:modelValue"]);

type GroupSelect = {
  id: string;
  name: string;
};

type MemberSelect = {
  id: string;
  name: string;
};

const { buildSearchCriteria, sortingOptions } = useSearch();

const { myGroups } = useGroups();

const selectedSorting = ref("Avg rating ascending");

watch(selectedSorting, () => {
  const updatedSearchCriteria = buildSearchCriteria(
    searchCriteria,
    selectedSorting,
  );
  emit("update:modelValue", updatedSearchCriteria);
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <UDivider class="my-8" label="SORTING" />
    <USelect
      v-model="selectedSorting"
      :options="sortingOptions"
      option-attribute="label"
      value-attribute="label"
      icon="i-heroicons-arrows-up-down"
      placeholder="Sortierung..."
    />
  </div>
</template>
