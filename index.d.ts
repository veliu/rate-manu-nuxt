import type { IApiInstance } from "~/types/ApiTypes";

declare module "#app" {
  interface NuxtApp {
    $api: IApiInstance;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $api: IApiInstance;
  }
}

export {};
