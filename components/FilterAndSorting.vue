<script setup lang="ts">
import type {
  SearchCriteria,
  Sorting,
  GroupResponse,
  GroupMember,
} from "~/types/ApiTypes";

const props = defineProps<{ modelValue: SearchCriteria }>();
const emit = defineEmits(["update:modelValue"]);

type GroupSelect = {
  id: string;
  name: string;
};

type MemberSelect = {
  id: string;
  name: string;
};

type SortingOption = {
  propertyName: string;
  direction: "asc" | "desc";
  label: string;
};

const { myGroups } = useGroups();

const groupOptions = myGroups.value.map(
  (g: GroupResponse): GroupSelect => ({ id: g.id, name: g.name }),
);
const selectedGroupOption = ref(undefined) as Ref<GroupSelect | undefined>;

const memberOptions = myGroups.value.flatMap(
  (g: GroupResponse): GroupSelect[] =>
    g.members.map(
      (m: GroupMember): MemberSelect => ({
        id: m.id,
        name: m.name ?? m.email,
      }),
    ),
);
const selectedMemberOption = ref(undefined) as Ref<MemberSelect | undefined>;
const selectedRatingOption = ref(0) as Ref<number>;

const sortingOptions: SortingOption[] = [
  {
    propertyName: "averageRating",
    direction: "asc",
    label: "Avg rating ascending",
  },
  {
    propertyName: "averageRating",
    direction: "desc",
    label: "Avg rating descending",
  },
  { propertyName: "name", direction: "asc", label: "Name ascending" },
  { propertyName: "name", direction: "desc", label: "Name descending" },
];

const selectedSorting = ref("Avg rating ascending");

const getSortingOptionByLabel = (label: string): Sorting => {
  return sortingOptions.find((option) => option.label === label) as Sorting;
};

const buildSearchCriteria = (): SearchCriteria => {
  const sortingOption = getSortingOptionByLabel(selectedSorting.value);
  return {
    ...props.modelValue,
    sorting: [
      {
        propertyName: sortingOption.propertyName,
        direction: sortingOption.direction,
      },
    ],
  };
};

watch(selectedSorting, () => {
  const updatedSearchCriteria = buildSearchCriteria();
  emit("update:modelValue", updatedSearchCriteria);
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <UDivider class="my-8" label="FILTER" />
    <div>
      <span>Filter by group</span>
      <div class="flex flex-row gap-1">
        <UInputMenu
          v-model="selectedGroupOption"
          trailing-icon="i-heroicons-chevron-up-down-20-solid"
          class="w-full"
          placeholder="Select a group"
          value-attribute="id"
          option-attribute="name"
          :options="groupOptions"
        />
        <UButton
          icon="i-heroicons-x-mark"
          variant="ghost"
          @click="selectedGroupOption = undefined"
        />
      </div>
    </div>
    <div>
      <span>Filter by author</span>
      <div class="flex flex-row gap-1">
        <UInputMenu
          v-model="selectedMemberOption"
          trailing-icon="i-heroicons-chevron-up-down-20-solid"
          class="w-full"
          placeholder="Created by"
          value-attribute="id"
          option-attribute="name"
          :options="memberOptions"
        />
        <UButton
          icon="i-heroicons-x-mark"
          variant="ghost"
          @click="selectedMemberOption = undefined"
        />
      </div>
    </div>
    <div>
      <span>Filter by rating</span>
      <div class="flex flex-row gap-1">
        <div
          class="container border-0 rounded-md ring-1 ring-inset shadow-sm py-1 ring-gray-700"
        >
          <FoodEmojiRatingBar
            v-model="selectedRatingOption"
            emoji-size="1.2em"
          />
        </div>
        <UButton
          icon="i-heroicons-x-mark"
          variant="ghost"
          @click="selectedRatingOption = 0"
        />
      </div>
    </div>
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
