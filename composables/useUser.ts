import type {
  ConfirmRegistrationRequest,
  LoginRequest,
  RegisterRequest,
  Token,
} from "~/types/ApiTypes";

export type useUserReturn = {
  login(request: LoginRequest): Promise<void>;
  register(request: RegisterRequest): Promise<void>;
  logout(): Promise<void>;
  confirmRegistration(request: ConfirmRegistrationRequest): Promise<boolean>;
};
export function useUser() {
  const { $apiFetcher } = useNuxtApp();
  const toast = useToast();
  const loginCookie = useCookie<Token | undefined>("ratemanu-login");
  const router = useRouter();

  async function login(request: LoginRequest) {
    const { status, data, error } = await useAsyncData<Token>(() => {
      return $apiFetcher("/login_check", {
        method: "POST",
        body: request,
      });
    });

    if (status.value === "error") {
      toast.add({
        id: "login-failed",
        title: "Authentication failed!",
        description: "User or password wrong",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }

    if (status.value === "success") {
      const loginResponse = data.value as Token;
      const loginCookie = useCookie("ratemanu-login");
      loginCookie.value = JSON.stringify(loginResponse);
      navigateTo("/");
      toast.add({
        id: "login-success",
        title: "Welcome!",
        icon: "i-heroicons-face-smile",
      });
    }
  }

  async function register(request: RegisterRequest) {
    const { status } = await useAsyncData<undefined>(() => {
      return $apiFetcher("/authentication/register", {
        method: "POST",
        body: request,
      });
    });

    if (status.value === "error") {
      toast.add({
        id: "registration-failed",
        title: "Registration failed!",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }

    if (status.value === "success") {
      toast.add({
        id: "registration-success",
        title: "Success!",
        description: "Please check your inbox to verify your registration",
        icon: "i-heroicons-face-smile",
      });
    }
  }

  async function logout() {
    await useAsyncData<undefined>(() => {
      return $apiFetcher("/token/invalidate", {
        method: "POST",
        body: {
          refresh_token: loginCookie.value?.refresh_token,
        },
      });
    });

    loginCookie.value = undefined;

    toast.add({
      id: "logout-success",
      title: "You're logged out",
      icon: "i-heroicons-face-smile",
    });

    await router.push("/login");
  }

  async function confirmRegistration(request: ConfirmRegistrationRequest) {
    const { status } = await useAsyncData<undefined>(() => {
      return $apiFetcher("/authentication/confirm-registration", {
        method: "POST",
        body: request,
      });
    });

    if (status.value === "success") {
      toast.add({
        id: "registration-confirmation-success",
        title: "Successfully confirmed!",
        description: "Now please log in",
        icon: "i-heroicons-face-smile",
      });

      return true;
    }

    if (status.value === "error") {
      toast.add({
        id: "registration-confirmation-failed",
        title: "Confirmation failed!",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }

    return false;
  }

  return {
    login,
    register,
    logout,
    confirmRegistration,
  };
}
