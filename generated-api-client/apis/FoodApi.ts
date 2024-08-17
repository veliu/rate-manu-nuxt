// TODO: better import syntax?
import {
  BaseAPIRequestFactory,
  RequiredError,
  COLLECTION_FORMATS,
} from "./baseapi";
import type { Configuration } from "../configuration";
import type {
  RequestContext,
  ResponseContext} from "../http/http";
import {
  HttpMethod,
  HttpFile,
  HttpInfo,
} from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { canConsumeForm, isCodeInRange } from "../util";
import type { SecurityAuthentication } from "../auth/auth";

import type { CreateFoodRequest } from "../models/CreateFoodRequest";
import type { FoodCollectionResponse } from "../models/FoodCollectionResponse";

/**
 * no description
 */
export class FoodApiRequestFactory extends BaseAPIRequestFactory {
  /**
   */
  public async getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/food/";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["Bearer"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * @param createFoodRequest
   */
  public async postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate(
    createFoodRequest: CreateFoodRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'createFoodRequest' is not null or undefined
    if (createFoodRequest === null || createFoodRequest === undefined) {
      throw new RequiredError(
        "FoodApi",
        "postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate",
        "createFoodRequest",
      );
    }

    // Path Params
    const localVarPath = "/api/food/";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createFoodRequest, "CreateFoodRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["Bearer"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class FoodApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getVeliuRatemanuApplicationRestapiFoodFoodcrudSearchWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<FoodCollectionResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: FoodCollectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FoodCollectionResponse",
        "",
      ) as FoodCollectionResponse;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: FoodCollectionResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FoodCollectionResponse",
        "",
      ) as FoodCollectionResponse;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async postVeliuRatemanuApplicationRestapiFoodFoodcrudCreateWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<void>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("0", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        undefined,
      );
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }
}
