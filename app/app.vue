<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const items = computed<NavigationMenuItem[]>(() => []);
const footerItems = computed<NavigationMenuItem[]>(() => []);
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <UHeader>
      <template #title>
        <h1>RateManu</h1>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />

        <UButton
          color="neutral"
          variant="ghost"
          to="/account"
          icon="i-lucide-user"
          aria-label="Account"
        />
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-lucide-chef-hat" type="dashed" class="h-px" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu :items="footerItems" variant="link" />

      <template #right>
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://chat.nuxt.dev"
          target="_blank"
          aria-label="Discord"
        />
      </template>
    </UFooter>
  </UApp>
</template>
