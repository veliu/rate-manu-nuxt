import { useSessionStore } from "~/store/session.store";
import { useGroups } from "~/composables/useGroups";
import type {
  ConfirmUserRegistrationRequest,
  LoginCheckRequest,
  RegisterUserRequest,
  UpdateUserRequest,
  UserResponse,
} from "ratemanu-api-client";
import type { AxiosError } from "axios";

export type useUserReturn = {
  login(request: LoginCheckRequest): Promise<void>;
  register(request: RegisterUserRequest): Promise<void>;
  logout(): Promise<void>;
  confirmRegistration(token: string): Promise<void>;
  updateMe(request: UpdateUserRequest): Promise<UserResponse | undefined>;
};
export function useUser(): useUserReturn {
  const { $userApi, $authenticationApi } = useNuxtApp();
  const toast = useToast();
  const router = useRouter();
  const { fetchGroups } = useGroups();
  const { user, bearerToken, refreshToken } = storeToRefs(useSessionStore());
  const { resetSession } = useSessionStore();

  async function refreshMe(newUser?: UserResponse) {
    if (newUser) {
      user.value = newUser;
    } else {
      const { data } = await $userApi.meGet();
      user.value = data;
    }
  }

  async function login(request: LoginCheckRequest) {
    try {
      const { data } = await $authenticationApi.loginCheck(request);

      bearerToken.value = data.token;
      refreshToken.value = data.refresh_token;

      await refreshMe();
      await fetchGroups();

      toast.add({
        id: "login-success",
        title: "Welcome!",
        icon: "i-heroicons-face-smile",
      });

      navigateTo("/");
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>; // Cast inside the catch block
      toast.add({
        id: "login-failed",
        title: axiosError.response?.data?.message ?? "Login failed!",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
      console.error(error);
    }
  }

  async function register(request: RegisterUserRequest) {
    try {
      await $authenticationApi.register(request);
      toast.add({
        id: "registration-success",
        title: "Success!",
        description: "Please check your inbox to verify your registration",
        icon: "i-heroicons-face-smile",
      });
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>; // Cast inside the catch block
      toast.add({
        id: "registration-failed",
        title: axiosError.response?.data?.message ?? "Registration failed!",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
      console.error(error);
    }
  }

  async function logout() {
    resetSession();

    toast.add({
      id: "logout-success",
      title: "You're logged out",
      icon: "i-heroicons-face-smile",
    });

    await router.push("/login");
  }

  async function confirmRegistration(token: string) {
    try {
      await $authenticationApi.confirmRegistration({
        token: token,
      } as ConfirmUserRegistrationRequest);

      toast.add({
        id: "registration-confirmation-success",
        title: "Successfully confirmed!",
        description: "Now please log in",
        icon: "i-heroicons-face-smile",
      });

      await router.push("/login");
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.add({
        id: "registration-confirmation-failed",
        title: axiosError.response?.data?.message ?? "Confirmation failed!",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
      console.error(error);
    }
  }

  async function updateMe(
    request: UpdateUserRequest,
  ): Promise<UserResponse | undefined> {
    try {
      const { data } = await $userApi.meUpdate(request);

      await refreshMe(data);

      toast.add({
        id: "update-me-success",
        title: "Successfully updated!",
        icon: "i-heroicons-face-smile",
      });

      return data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.add({
        id: "update-me-failed",
        title: axiosError.response?.data?.message ?? "Update failed!",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
    }
  }

  return {
    login,
    register,
    logout,
    confirmRegistration,
    updateMe,
  };
}
