import type { FetchOptions } from "ofetch";
import type { Ref } from "vue";
import HttpFactory from "../factory";
import type { RegisterRequest } from "~/types/RegisterRequest";
import type { RegisterResponse } from "~/types/RegisterResponse";
import type { AsyncDataOptions } from "#app";
import type { LoginResponse } from "~/types/LoginResponse";
import type { LoginRequest } from "~/types/LoginRequest";
import type { LoginCheck } from "~/types/LoginCheck";
import type { RefreshToken } from "~/types/RefreshToken";
import type { Token } from "~/types/Token";

class AuthModule extends HttpFactory {
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
      return this.call<RegisterResponse>(
        "POST",
        `${this.RESOURCE}/register`,
        register,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async login(
    login: LoginRequest,
    asyncDataOptions?: AsyncDataOptions<LoginResponse>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call<LoginResponse>(
        "POST",
        "/login_check",
        login,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async refreshToken(
    refreshToken: string,
    asyncDataOptions?: AsyncDataOptions<Token>,
  ) {
    return useAsyncData(() => {
      const refreshTokenRequest: RefreshToken = { refresh_token: refreshToken };
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call<Token>(
        "POST",
        "/token/refresh",
        refreshTokenRequest,
        fetchOptions,
      );
    }, asyncDataOptions);
  }
}

export default AuthModule;
