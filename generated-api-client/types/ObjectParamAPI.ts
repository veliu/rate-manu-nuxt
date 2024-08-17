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

export interface DefaultApiGetVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeRequest {
  /**
   *
   * @type string
   * @memberof DefaultApigetVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke
   */
  token: string;
}

export interface DefaultApiGetVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeRequest {}

export interface DefaultApiPostVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeRequest {
  /**
   *
   * @type string
   * @memberof DefaultApipostVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke
   */
  token: string;
}

export interface DefaultApiPostVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeRequest {
  /**
   *
   * @type RegisterUserRequest
   * @memberof DefaultApipostVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke
   */
  registerUserRequest: RegisterUserRequest;
}

export interface DefaultApiPostVeliuRatemanuApplicationRestapiRatingRatingcrudCreateRequest {
  /**
   *
   * @type CreateRatingRequest
   * @memberof DefaultApipostVeliuRatemanuApplicationRestapiRatingRatingcrudCreate
   */
  createRatingRequest: CreateRatingRequest;
}

export interface DefaultApiPostVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeRequest {
  /**
   *
   * @type string
   * @memberof DefaultApipostVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke
   */
  emailAddress: string;
}

export interface DefaultApiPutVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateRequest {
  /**
   *
   * @type string
   * @memberof DefaultApiputVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate
   */
  id: string;
  /**
   *
   * @type UpdateRatingRequest
   * @memberof DefaultApiputVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate
   */
  updateRatingRequest: UpdateRatingRequest;
}

export class ObjectDefaultApi {
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
   * @param param the request object
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
    param: DefaultApiGetVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeRequest,
    options?: Configuration,
  ): Promise<HttpInfo<void>> {
    return this.api
      .getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
        param.token,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
    param: DefaultApiGetVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
        param.token,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeWithHttpInfo(
    param: DefaultApiGetVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeRequest = {},
    options?: Configuration,
  ): Promise<HttpInfo<void>> {
    return this.api
      .getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeWithHttpInfo(
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke(
    param: DefaultApiGetVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeRequest = {},
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke(options)
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
    param: DefaultApiPostVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeRequest,
    options?: Configuration,
  ): Promise<HttpInfo<void>> {
    return this.api
      .postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
        param.token,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
    param: DefaultApiPostVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
        param.token,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeWithHttpInfo(
    param: DefaultApiPostVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeRequest,
    options?: Configuration,
  ): Promise<HttpInfo<void>> {
    return this.api
      .postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeWithHttpInfo(
        param.registerUserRequest,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke(
    param: DefaultApiPostVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke(
        param.registerUserRequest,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public postVeliuRatemanuApplicationRestapiRatingRatingcrudCreateWithHttpInfo(
    param: DefaultApiPostVeliuRatemanuApplicationRestapiRatingRatingcrudCreateRequest,
    options?: Configuration,
  ): Promise<HttpInfo<void>> {
    return this.api
      .postVeliuRatemanuApplicationRestapiRatingRatingcrudCreateWithHttpInfo(
        param.createRatingRequest,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate(
    param: DefaultApiPostVeliuRatemanuApplicationRestapiRatingRatingcrudCreateRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate(
        param.createRatingRequest,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public postVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeWithHttpInfo(
    param: DefaultApiPostVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeRequest,
    options?: Configuration,
  ): Promise<HttpInfo<void>> {
    return this.api
      .postVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeWithHttpInfo(
        param.emailAddress,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke(
    param: DefaultApiPostVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke(
        param.emailAddress,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateWithHttpInfo(
    param: DefaultApiPutVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateRequest,
    options?: Configuration,
  ): Promise<HttpInfo<void>> {
    return this.api
      .putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateWithHttpInfo(
        param.id,
        param.updateRatingRequest,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate(
    param: DefaultApiPutVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate(
        param.id,
        param.updateRatingRequest,
        options,
      )
      .toPromise();
  }
}

export interface FoodApiGetVeliuRatemanuApplicationRestapiFoodFoodcrudSearchRequest {}

export interface FoodApiPostVeliuRatemanuApplicationRestapiFoodFoodcrudCreateRequest {
  /**
   *
   * @type CreateFoodRequest
   * @memberof FoodApipostVeliuRatemanuApplicationRestapiFoodFoodcrudCreate
   */
  createFoodRequest: CreateFoodRequest;
}

export class ObjectFoodApi {
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
   * @param param the request object
   */
  public getVeliuRatemanuApplicationRestapiFoodFoodcrudSearchWithHttpInfo(
    param: FoodApiGetVeliuRatemanuApplicationRestapiFoodFoodcrudSearchRequest = {},
    options?: Configuration,
  ): Promise<HttpInfo<FoodCollectionResponse>> {
    return this.api
      .getVeliuRatemanuApplicationRestapiFoodFoodcrudSearchWithHttpInfo(options)
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch(
    param: FoodApiGetVeliuRatemanuApplicationRestapiFoodFoodcrudSearchRequest = {},
    options?: Configuration,
  ): Promise<FoodCollectionResponse> {
    return this.api
      .getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch(options)
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public postVeliuRatemanuApplicationRestapiFoodFoodcrudCreateWithHttpInfo(
    param: FoodApiPostVeliuRatemanuApplicationRestapiFoodFoodcrudCreateRequest,
    options?: Configuration,
  ): Promise<HttpInfo<void>> {
    return this.api
      .postVeliuRatemanuApplicationRestapiFoodFoodcrudCreateWithHttpInfo(
        param.createFoodRequest,
        options,
      )
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate(
    param: FoodApiPostVeliuRatemanuApplicationRestapiFoodFoodcrudCreateRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate(
        param.createFoodRequest,
        options,
      )
      .toPromise();
  }
}
