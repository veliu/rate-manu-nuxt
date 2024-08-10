/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFoodRequest } from "../models/CreateFoodRequest";
import type { CreateRatingRequest } from "../models/CreateRatingRequest";
import type { RegisterUserRequest } from "../models/RegisterUserRequest";
import type { UpdateRatingRequest } from "../models/UpdateRatingRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class DefaultService {
  /**
   * @param token
   * @returns any
   * @throws ApiError
   */
  public static getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
    token: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/authentication/confirm-registration",
      query: {
        token: token,
      },
    });
  }
  /**
   * @param token
   * @returns any
   * @throws ApiError
   */
  public static postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
    token: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/authentication/confirm-registration",
      query: {
        token: token,
      },
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/authentication/me",
    });
  }
  /**
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke(
    requestBody: RegisterUserRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/authentication/register",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation errors.`,
      },
    });
  }
  /**
   * @param emailAddress
   * @returns any
   * @throws ApiError
   */
  public static postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke(
    emailAddress: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/invite/{emailAddress}",
      path: {
        emailAddress: emailAddress,
      },
    });
  }
  /**
   * @param requestBody
   * @returns any
   * @throws ApiError
   */
  public static postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate(
    requestBody: CreateFoodRequest,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/food/",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @param requestBody
   * @returns any
   * @throws ApiError
   */
  public static postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate(
    requestBody: CreateRatingRequest,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/rating/",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @param id
   * @param requestBody
   * @returns any
   * @throws ApiError
   */
  public static putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate(
    id: string,
    requestBody: UpdateRatingRequest,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/rating/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
