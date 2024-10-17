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
    asyncDataOptions?: AsyncDataOptions<undefined>,
  ) {
    return useAsyncData(() => {
      return this.call<undefined>(
        "POST",
        `${this.RESOURCE}/register`,
        register,
      );
    }, asyncDataOptions);
  }

  async confirmRegistration(
    request: ConfirmRegistrationRequest,
    asyncDataOptions?: AsyncDataOptions<undefined>,
  ) {
    return useAsyncData(() => {
      return this.call<undefined>(
        "POST",
        `${this.RESOURCE}/confirm-registration`,
        request,
      );
    }, asyncDataOptions);
  }

  async login(login: LoginRequest, asyncDataOptions?: AsyncDataOptions<Token>) {
    return useAsyncData(() => {
      return this.call<Token>("POST", "/login_check", login);
    }, asyncDataOptions);
  }

  async refreshToken(asyncDataOptions?: AsyncDataOptions<Token>) {
    return useAsyncData(() => {
      const refreshTokenRequest = {
        refresh_token: this.loginCookie.value.refresh_token,
      };
      return this.call<Token>("POST", "/token/refresh", refreshTokenRequest);
    }, asyncDataOptions);
  }

  async invalidateToken(asyncDataOptions?: AsyncDataOptions<Token>) {
    return useAsyncData(() => {
      const refreshTokenRequest = {
        refresh_token: this.loginCookie.value.refresh_token,
      };
      return this.call<Token>("POST", "/token/invalidate", refreshTokenRequest);
    }, asyncDataOptions);
  }
}

export default AuthModule;
