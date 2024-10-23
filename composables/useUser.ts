import type {
  ConfirmRegistrationRequest,
  LoginRequest,
  PutMeRequest,
  RegisterRequest,
  Token,
  User,
} from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";
import type { FetchOptions } from "ofetch";
import { useGroups } from "~/composables/useGroups";

export type useUserReturn = {
  login(request: LoginRequest): Promise<void>;
  register(request: RegisterRequest): Promise<void>;
  logout(): Promise<void>;
  confirmRegistration(token: string): Promise<void>;
  updateMe(request: PutMeRequest): Promise<User>;
};
export function useUser(): useUserReturn {
  const { $apiFetcher } = useNuxtApp();
  const toast = useToast();
  const router = useRouter();
  const { fetchGroups } = useGroups();
  const { user, token, bearerToken, refreshToken } =
    storeToRefs(useSessionStore());
  const { resetSession } = useSessionStore();

  const fetchOptions: ComputedRef<FetchOptions<"json">> = computed(() => ({
    headers: {
      Authorization: `Bearer ${token.value?.token}`,
      "Accept-Language": "en-US",
    },
  }));

  async function refreshMe(newUser?: User) {
    if (newUser) {
      user.value = newUser;
    } else {
      user.value = await $apiFetcher<User>("/user/me", {
        method: "GET",
        ...fetchOptions.value,
      });
    }
  }

  async function login(request: LoginRequest) {
    try {
      const response = await $apiFetcher<Token>("/login_check", {
        method: "POST",
        body: request,
      });

      bearerToken.value = response.token;
      refreshToken.value = response.refresh_token;

      toast.add({
        id: "login-success",
        title: "Welcome!",
        icon: "i-heroicons-face-smile",
      });

      await refreshMe();
      await fetchGroups();

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
      await $apiFetcher("/authentication/register", {
        method: "POST",
        body: request,
        ...fetchOptions.value,
      });
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
    try {
      await $apiFetcher("/token/invalidate", {
        method: "POST",
        body: {
          refresh_token: token.value.refresh_token,
        },
        ...fetchOptions.value,
      });
    } finally {
      resetSession();

      toast.add({
        id: "logout-success",
        title: "You're logged out",
        icon: "i-heroicons-face-smile",
      });

      await router.push("/login");
    }
  }

  async function confirmRegistration(token: string) {
    try {
      $apiFetcher("/authentication/confirm-registration", {
        method: "POST",
        body: { token: token },
        ...fetchOptions.value,
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

  async function updateMe(request: PutMeRequest): Promise<User> {
    try {
      const newUser = await $apiFetcher<User>("/user/me", {
        method: "PUT",
        body: request,
        ...fetchOptions.value,
      });
      await refreshMe(newUser);
      toast.add({
        id: "update-me-success",
        title: "Successfully updated!",
        icon: "i-heroicons-face-smile",
      });
    } catch (error) {
      toast.add({
        id: "update-me-failed",
        title: "Failed updating!",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }

    return user.value as User;
  }

  return {
    login,
    register,
    logout,
    confirmRegistration,
    updateMe,
  };
}
