<script setup lang="ts">
const searchQuery = ref("");
const searchResults = ref([]);

const handleInput = () => {
  if (searchQuery.value.length >= 3) {
    performSearch(searchQuery.value);
  } else {
    searchResults.value = [];
  }
};

const performSearch = async (query) => {
  // Replace this with your actual search logic
  // For example, an API call to fetch search results
  try {
    // Simulate an API call
    const response = await fetch(`/api/search?q=${query}`);
    const data = await response.json();
    searchResults.value = data.results;
  } catch (error) {
    console.error("Error performing search:", error);
  }
};
</script>

<template>
  <ClientOnly>
    <div class="my-4">
      <UInput
        v-model="searchQuery"
        placeholder="Search..."
        @input="handleInput"
      />
      <div v-if="searchResults.length > 0">
        <ul>
          <li v-for="(result, index) in searchResults" :key="index">
            {{ result }}
          </li>
        </ul>
      </div>
      <div v-else-if="searchQuery.length >= 3">No results found.</div>
    </div>
  </ClientOnly>
</template>
