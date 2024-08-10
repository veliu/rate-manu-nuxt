import HttpFactory from "../factory";
import type { RegisterRequest } from "~/types/RegisterRequest";
import type { RegisterResponse } from "~/types/RegisterResponse";
import type { AsyncDataOptions } from "#app";
import type { FetchOptions } from "ofetch";

class AuthModule extends HttpFactory<RegisterResponse> {
  private RESOURCE = "/authentication";

  async register(
    register: RegisterRequest,
    asyncDataOptions?: AsyncDataOptions<RegisterResponse>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call(
        "POST",
        `${this.RESOURCE}/register`,
        register,
        fetchOptions,
      );
    }, asyncDataOptions);
  }
}

export default AuthModule;
