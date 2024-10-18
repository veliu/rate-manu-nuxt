import type {
  ConfirmRegistrationRequest,
  LoginRequest,
  RegisterRequest,
  Token,
} from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";

export type useUserReturn = {
  login(request: LoginRequest): Promise<void>;
  register(request: RegisterRequest): Promise<void>;
  logout(): Promise<void>;
  confirmRegistration(request: ConfirmRegistrationRequest): Promise<void>;
};
export function useUser(): useUserReturn {
  const { $apiFetcher } = useNuxtApp();
  const toast = useToast();
  const router = useRouter();
  const { updateToken } = useSessionStore();
  const { sessionToken } = useSessionStore();

  async function login(request: LoginRequest) {
    try {
      const token = await $apiFetcher<Token>("/login_check", {
        method: "POST",
        body: request,
      });
      updateToken(token);
      toast.add({
        id: "login-success",
        title: "Welcome!",
        icon: "i-heroicons-face-smile",
      });
      navigateTo("/");
    } catch (error) {
      toast.add({
        id: "login-failed",
        title: "Authentication failed!",
        description: "User or password wrong",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }
  }

  async function register(request: RegisterRequest) {
    try {
      const data = { method: "POST", body: request };
      await $apiFetcher("/authentication/register", data);
      toast.add({
        id: "registration-success",
        title: "Success!",
        description: "Please check your inbox to verify your registration",
        icon: "i-heroicons-face-smile",
      });
    } catch (error) {
      toast.add({
        id: "registration-failed",
        title: "Registration failed!",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }
  }

  async function logout() {
    await $apiFetcher("/token/invalidate", {
      method: "POST",
      body: {
        refresh_token: sessionToken.refresh_token,
      },
    });

    updateToken({ token: "", refresh_token: "" });

    toast.add({
      id: "logout-success",
      title: "You're logged out",
      icon: "i-heroicons-face-smile",
    });

    await router.push("/login");
  }

  async function confirmRegistration(request: ConfirmRegistrationRequest) {
    try {
      $apiFetcher("/authentication/confirm-registration", {
        method: "POST",
        body: request,
      });
      toast.add({
        id: "registration-confirmation-success",
        title: "Successfully confirmed!",
        description: "Now please log in",
        icon: "i-heroicons-face-smile",
      });
      await router.push("/login");
    } catch (error) {
      toast.add({
        id: "registration-confirmation-failed",
        title: "Confirmation failed!",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }
  }

  return {
    login,
    register,
    logout,
    confirmRegistration,
  };
}
