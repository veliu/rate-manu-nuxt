import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type {
  GroupCollectionResponse,
  InviteUserToGroupRequest,
  PutMeRequest,
  User,
} from "~/types/ApiTypes";

class UserModule extends HttpFactory {
  private RESOURCE = "/user";

  async getMe(asyncDataOptions?: AsyncDataOptions<User>) {
    return useAsyncData(() => {
      return this.call<User>("GET", `${this.RESOURCE}/me`);
    }, asyncDataOptions);
  }

  async putMe(
    request: PutMeRequest,
    asyncDataOptions?: AsyncDataOptions<User>,
  ) {
    return useAsyncData(() => {
      return this.call<User>("PUT", `${this.RESOURCE}/me`, request);
    }, asyncDataOptions);
  }

  async myGroups(asyncDataOptions?: AsyncDataOptions<GroupCollectionResponse>) {
    return useAsyncData(() => {
      return this.call<GroupCollectionResponse>(
        "GET",
        `${this.RESOURCE}/my-groups`,
      );
    }, asyncDataOptions);
  }

  async inviteUserToGroup(
    request: InviteUserToGroupRequest,
    asyncDataOptions?: AsyncDataOptions<undefined>,
  ) {
    return useAsyncData(() => {
      return this.call<undefined>("POST", `${this.RESOURCE}/invite`, request);
    }, asyncDataOptions);
  }
}

export default UserModule;
