import type { FetchOptions } from "ofetch";
import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type {
  ConfirmRegistrationRequest,
  LoginRequest,
  RegisterRequest,
  Token,
} from "~/types/ApiTypes";

class AuthModule extends HttpFactory {
  private RESOURCE = "/authentication";

  private loginCookie = useCookie("ratemanu-login") as Ref<Token>;

  async register(
    register: RegisterRequest,
    asyncDataOptions?: AsyncDataOptions<{}>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call<{}>(
        "POST",
        `${this.RESOURCE}/register`,
        register,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async confirmRegistration(
    request: ConfirmRegistrationRequest,
    asyncDataOptions?: AsyncDataOptions<{}>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call<{}>(
        "POST",
        `${this.RESOURCE}/confirm-registration`,
        request,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async login(login: LoginRequest, asyncDataOptions?: AsyncDataOptions<Token>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call<Token>("POST", "/login_check", login, fetchOptions);
    }, asyncDataOptions);
  }

  async refreshToken(asyncDataOptions?: AsyncDataOptions<Token>) {
    return useAsyncData(() => {
      const refreshTokenRequest = {
        refresh_token: this.loginCookie.value.refresh_token,
      };
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

  async invalidateToken(asyncDataOptions?: AsyncDataOptions<Token>) {
    return useAsyncData(() => {
      const refreshTokenRequest = {
        refresh_token: this.loginCookie.value.refresh_token,
      };
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call<Token>(
        "POST",
        "/token/invalidate",
        refreshTokenRequest,
        fetchOptions,
      );
    }, asyncDataOptions);
  }
}

export default AuthModule;
