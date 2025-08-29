<script setup lang="ts">
const props = defineProps<{ modelValue: SearchCriteria }>();
const searchCriteria = toRef(props.modelValue);
const emit = defineEmits(["update:modelValue"]);

const { buildSearchCriteria, sortingOptions } = useSearch();

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
    <USelect
      v-model="selectedSorting"
      :items="sortingOptions"
      label-key="label"
      value-key="label"
      icon="i-lucide-arrows-up-down"
      placeholder="Sortierung..."
    />
  </div>
</template>
