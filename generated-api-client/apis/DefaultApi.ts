// TODO: better import syntax?
import {
  BaseAPIRequestFactory,
  RequiredError,
  COLLECTION_FORMATS,
} from "./baseapi";
import { Configuration } from "../configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile,
  HttpInfo,
} from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { canConsumeForm, isCodeInRange } from "../util";
import { SecurityAuthentication } from "../auth/auth";

import { CreateRatingRequest } from "../models/CreateRatingRequest";
import { RegisterUserRequest } from "../models/RegisterUserRequest";
import { UpdateRatingRequest } from "../models/UpdateRatingRequest";

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * @param token
   */
  public async getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
    token: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke",
        "token",
      );
    }

    // Path Params
    const localVarPath = "/api/authentication/confirm-registration";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (token !== undefined) {
      requestContext.setQueryParam(
        "token",
        ObjectSerializer.serialize(token, "string", ""),
      );
    }

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
   */
  public async getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke(
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/authentication/me";

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
   * @param token
   */
  public async postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
    token: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke",
        "token",
      );
    }

    // Path Params
    const localVarPath = "/api/authentication/confirm-registration";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (token !== undefined) {
      requestContext.setQueryParam(
        "token",
        ObjectSerializer.serialize(token, "string", ""),
      );
    }

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
   * @param registerUserRequest
   */
  public async postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke(
    registerUserRequest: RegisterUserRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'registerUserRequest' is not null or undefined
    if (registerUserRequest === null || registerUserRequest === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke",
        "registerUserRequest",
      );
    }

    // Path Params
    const localVarPath = "/api/authentication/register";

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
      ObjectSerializer.serialize(
        registerUserRequest,
        "RegisterUserRequest",
        "",
      ),
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

  /**
   * @param createRatingRequest
   */
  public async postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate(
    createRatingRequest: CreateRatingRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'createRatingRequest' is not null or undefined
    if (createRatingRequest === null || createRatingRequest === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate",
        "createRatingRequest",
      );
    }

    // Path Params
    const localVarPath = "/api/rating/";

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
      ObjectSerializer.serialize(
        createRatingRequest,
        "CreateRatingRequest",
        "",
      ),
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

  /**
   * @param emailAddress
   */
  public async postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke(
    emailAddress: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'emailAddress' is not null or undefined
    if (emailAddress === null || emailAddress === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke",
        "emailAddress",
      );
    }

    // Path Params
    const localVarPath = "/api/user/invite/{emailAddress}".replace(
      "{" + "emailAddress" + "}",
      encodeURIComponent(String(emailAddress)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
   * @param id
   * @param updateRatingRequest
   */
  public async putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate(
    id: string,
    updateRatingRequest: UpdateRatingRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate",
        "id",
      );
    }

    // verify required parameter 'updateRatingRequest' is not null or undefined
    if (updateRatingRequest === null || updateRatingRequest === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate",
        "updateRatingRequest",
      );
    }

    // Path Params
    const localVarPath = "/api/rating/{id}".replace(
      "{" + "id" + "}",
      encodeURIComponent(String(id)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        updateRatingRequest,
        "UpdateRatingRequest",
        "",
      ),
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

export class DefaultApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeWithHttpInfo(
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<void>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        undefined,
      );
    }
    if (isCodeInRange("422", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Validation errors.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
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
   * @params response Response returned by the server for a request to postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async postVeliuRatemanuApplicationRestapiRatingRatingcrudCreateWithHttpInfo(
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async postVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeWithHttpInfo(
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

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateWithHttpInfo(
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
