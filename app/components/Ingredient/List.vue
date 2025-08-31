<script setup lang="ts">
import { h, resolveComponent } from "vue";
import type {
  IngredientCollectionResponse,
  IngredientResponse,
} from "ratemanu-api-client";
import type { TableColumn } from "@nuxt/ui";

defineProps<{
  ingredientCollection?: IngredientCollectionResponse | undefined;
}>();

const UBadge = resolveComponent("UBadge");

const columns: TableColumn<IngredientResponse>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => `#${row.getValue("id")}`,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "defaultUnit",
    header: "Default Unit",
    cell: ({ row }) => {
      return h(
        UBadge,
        { class: "capitalize", variant: "subtle", color: "info" },
        () => row.getValue("defaultUnit"),
      );
    },
  },
];
</script>

<template>
  <UTable
    :data="ingredientCollection?.items"
    :columns="columns"
    class="flex-1"
  />
</template>
