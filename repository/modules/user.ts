import type { FetchOptions } from "ofetch";
import type { Ref } from "vue";
import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type {
  GroupCollectionResponse,
  InviteUserToGroupRequest,
  PutMeRequest,
  Token,
  User,
} from "~/types/ApiTypes";

class UserModule extends HttpFactory {
  private RESOURCE = "/user";

  private loginCookie = useCookie("ratemanu-login") as Ref<Token>;

  async getMe(asyncDataOptions?: AsyncDataOptions<User>) {
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

  async putMe(
    request: PutMeRequest,
    asyncDataOptions?: AsyncDataOptions<User>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<User>(
        "PUT",
        `${this.RESOURCE}/me`,
        request,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async myGroups(asyncDataOptions?: AsyncDataOptions<GroupCollectionResponse>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<GroupCollectionResponse>(
        "GET",
        `${this.RESOURCE}/my-groups`,
        undefined,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async inviteUserToGroup(
    request: InviteUserToGroupRequest,
    asyncDataOptions?: AsyncDataOptions<{}>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<{}>(
        "POST",
        `${this.RESOURCE}/invite`,
        request,
        fetchOptions,
      );
    }, asyncDataOptions);
  }
}

export default UserModule;
