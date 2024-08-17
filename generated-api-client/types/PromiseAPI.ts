import type {
  HttpInfo} from "../http/http";
import {
  ResponseContext,
  RequestContext,
  HttpFile
} from "../http/http";
import type { Configuration } from "../configuration";

import type { CreateFoodRequest } from "../models/CreateFoodRequest";
import type { CreateRatingRequest } from "../models/CreateRatingRequest";
import type { FoodCollectionResponse } from "../models/FoodCollectionResponse";
import { FoodResponse } from "../models/FoodResponse";
import type { RegisterUserRequest } from "../models/RegisterUserRequest";
import type { UpdateRatingRequest } from "../models/UpdateRatingRequest";
import { ObservableDefaultApi , ObservableFoodApi } from "./ObservableAPI";

import type {
  DefaultApiRequestFactory,
  DefaultApiResponseProcessor,
} from "../apis/DefaultApi";


import type {
  FoodApiRequestFactory,
  FoodApiResponseProcessor,
} from "../apis/FoodApi";
export class PromiseDefaultApi {
  private api: ObservableDefaultApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: DefaultApiRequestFactory,
    responseProcessor?: DefaultApiResponseProcessor,
  ) {
    this.api = new ObservableDefaultApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * @param token
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
    token: string,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
        token,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param token
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
    token: string,
    _options?: Configuration,
  ): Promise<void> {
    const result =
      this.api.getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
        token,
        _options,
      );
    return result.toPromise();
  }

  /**
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeWithHttpInfo(
        _options,
      );
    return result.toPromise();
  }

  /**
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke(
    _options?: Configuration,
  ): Promise<void> {
    const result =
      this.api.getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke(
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param token
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
    token: string,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
        token,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param token
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
    token: string,
    _options?: Configuration,
  ): Promise<void> {
    const result =
      this.api.postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
        token,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param registerUserRequest
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeWithHttpInfo(
    registerUserRequest: RegisterUserRequest,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeWithHttpInfo(
        registerUserRequest,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param registerUserRequest
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke(
    registerUserRequest: RegisterUserRequest,
    _options?: Configuration,
  ): Promise<void> {
    const result =
      this.api.postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke(
        registerUserRequest,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param createRatingRequest
   */
  public postVeliuRatemanuApplicationRestapiRatingRatingcrudCreateWithHttpInfo(
    createRatingRequest: CreateRatingRequest,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.postVeliuRatemanuApplicationRestapiRatingRatingcrudCreateWithHttpInfo(
        createRatingRequest,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param createRatingRequest
   */
  public postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate(
    createRatingRequest: CreateRatingRequest,
    _options?: Configuration,
  ): Promise<void> {
    const result =
      this.api.postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate(
        createRatingRequest,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param emailAddress
   */
  public postVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeWithHttpInfo(
    emailAddress: string,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.postVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeWithHttpInfo(
        emailAddress,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param emailAddress
   */
  public postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke(
    emailAddress: string,
    _options?: Configuration,
  ): Promise<void> {
    const result =
      this.api.postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke(
        emailAddress,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param id
   * @param updateRatingRequest
   */
  public putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateWithHttpInfo(
    id: string,
    updateRatingRequest: UpdateRatingRequest,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateWithHttpInfo(
        id,
        updateRatingRequest,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param id
   * @param updateRatingRequest
   */
  public putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate(
    id: string,
    updateRatingRequest: UpdateRatingRequest,
    _options?: Configuration,
  ): Promise<void> {
    const result =
      this.api.putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate(
        id,
        updateRatingRequest,
        _options,
      );
    return result.toPromise();
  }
}
export class PromiseFoodApi {
  private api: ObservableFoodApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: FoodApiRequestFactory,
    responseProcessor?: FoodApiResponseProcessor,
  ) {
    this.api = new ObservableFoodApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   */
  public getVeliuRatemanuApplicationRestapiFoodFoodcrudSearchWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<FoodCollectionResponse>> {
    const result =
      this.api.getVeliuRatemanuApplicationRestapiFoodFoodcrudSearchWithHttpInfo(
        _options,
      );
    return result.toPromise();
  }

  /**
   */
  public getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch(
    _options?: Configuration,
  ): Promise<FoodCollectionResponse> {
    const result =
      this.api.getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch(_options);
    return result.toPromise();
  }

  /**
   * @param createFoodRequest
   */
  public postVeliuRatemanuApplicationRestapiFoodFoodcrudCreateWithHttpInfo(
    createFoodRequest: CreateFoodRequest,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.postVeliuRatemanuApplicationRestapiFoodFoodcrudCreateWithHttpInfo(
        createFoodRequest,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param createFoodRequest
   */
  public postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate(
    createFoodRequest: CreateFoodRequest,
    _options?: Configuration,
  ): Promise<void> {
    const result =
      this.api.postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate(
        createFoodRequest,
        _options,
      );
    return result.toPromise();
  }
}
