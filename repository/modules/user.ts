import type { FetchOptions } from "ofetch";
import type { Ref } from "vue";
import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type { Token } from "~/types/Token";
import type { User } from "~/types/User";
import type { GroupsResponse } from "~/types/GroupsResponse";

class UserModule extends HttpFactory {
  private RESOURCE = "/user";

  private loginCookie = useCookie("ratemanu-login") as Ref<Token>;

  async me(asyncDataOptions?: AsyncDataOptions<User>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<User>(
        "GET",
        `${this.RESOURCE}/me`,
        undefined,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async myGroups(asyncDataOptions?: AsyncDataOptions<GroupsResponse>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<GroupsResponse>(
        "GET",
        `${this.RESOURCE}/my-groups`,
        undefined,
        fetchOptions,
      );
    }, asyncDataOptions);
  }
}

export default UserModule;
