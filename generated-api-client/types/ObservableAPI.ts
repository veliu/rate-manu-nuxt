import type {
  ResponseContext,
  RequestContext,
  HttpInfo} from "../http/http";
import {
  HttpFile
} from "../http/http";
import type { Configuration } from "../configuration";
import type { Observable} from "../rxjsStub";
import { of, from , mergeMap, map } from "../rxjsStub";
import type { CreateFoodRequest } from "../models/CreateFoodRequest";
import type { CreateRatingRequest } from "../models/CreateRatingRequest";
import type { FoodCollectionResponse } from "../models/FoodCollectionResponse";
import { FoodResponse } from "../models/FoodResponse";
import type { RegisterUserRequest } from "../models/RegisterUserRequest";
import type { UpdateRatingRequest } from "../models/UpdateRatingRequest";

import {
  DefaultApiRequestFactory,
  DefaultApiResponseProcessor,
} from "../apis/DefaultApi";

import {
  FoodApiRequestFactory,
  FoodApiResponseProcessor,
} from "../apis/FoodApi";
export class ObservableDefaultApi {
  private requestFactory: DefaultApiRequestFactory;
  private responseProcessor: DefaultApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DefaultApiRequestFactory,
    responseProcessor?: DefaultApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DefaultApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DefaultApiResponseProcessor();
  }

  /**
   * @param token
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
    token: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
        token,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param token
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
    token: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
      token,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke(
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   */
  public getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke(
    _options?: Configuration,
  ): Observable<void> {
    return this.getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvokeWithHttpInfo(
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param token
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
    token: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
        token,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param token
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(
    token: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeWithHttpInfo(
      token,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param registerUserRequest
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeWithHttpInfo(
    registerUserRequest: RegisterUserRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke(
        registerUserRequest,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param registerUserRequest
   */
  public postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke(
    registerUserRequest: RegisterUserRequest,
    _options?: Configuration,
  ): Observable<void> {
    return this.postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeWithHttpInfo(
      registerUserRequest,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param createRatingRequest
   */
  public postVeliuRatemanuApplicationRestapiRatingRatingcrudCreateWithHttpInfo(
    createRatingRequest: CreateRatingRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate(
        createRatingRequest,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.postVeliuRatemanuApplicationRestapiRatingRatingcrudCreateWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param createRatingRequest
   */
  public postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate(
    createRatingRequest: CreateRatingRequest,
    _options?: Configuration,
  ): Observable<void> {
    return this.postVeliuRatemanuApplicationRestapiRatingRatingcrudCreateWithHttpInfo(
      createRatingRequest,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param emailAddress
   */
  public postVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeWithHttpInfo(
    emailAddress: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke(
        emailAddress,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.postVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param emailAddress
   */
  public postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke(
    emailAddress: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.postVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeWithHttpInfo(
      emailAddress,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param id
   * @param updateRatingRequest
   */
  public putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateWithHttpInfo(
    id: string,
    updateRatingRequest: UpdateRatingRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate(
        id,
        updateRatingRequest,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param id
   * @param updateRatingRequest
   */
  public putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate(
    id: string,
    updateRatingRequest: UpdateRatingRequest,
    _options?: Configuration,
  ): Observable<void> {
    return this.putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateWithHttpInfo(
      id,
      updateRatingRequest,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }
}
export class ObservableFoodApi {
  private requestFactory: FoodApiRequestFactory;
  private responseProcessor: FoodApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: FoodApiRequestFactory,
    responseProcessor?: FoodApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new FoodApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new FoodApiResponseProcessor();
  }

  /**
   */
  public getVeliuRatemanuApplicationRestapiFoodFoodcrudSearchWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<FoodCollectionResponse>> {
    const requestContextPromise =
      this.requestFactory.getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch(
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getVeliuRatemanuApplicationRestapiFoodFoodcrudSearchWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   */
  public getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch(
    _options?: Configuration,
  ): Observable<FoodCollectionResponse> {
    return this.getVeliuRatemanuApplicationRestapiFoodFoodcrudSearchWithHttpInfo(
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<FoodCollectionResponse>) => apiResponse.data),
    );
  }

  /**
   * @param createFoodRequest
   */
  public postVeliuRatemanuApplicationRestapiFoodFoodcrudCreateWithHttpInfo(
    createFoodRequest: CreateFoodRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate(
        createFoodRequest,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.postVeliuRatemanuApplicationRestapiFoodFoodcrudCreateWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param createFoodRequest
   */
  public postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate(
    createFoodRequest: CreateFoodRequest,
    _options?: Configuration,
  ): Observable<void> {
    return this.postVeliuRatemanuApplicationRestapiFoodFoodcrudCreateWithHttpInfo(
      createFoodRequest,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }
}
