# AuthenticationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**confirmRegistration**](#confirmregistration) | **POST** /api/authentication/confirm-registration | |
|[**loginCheck**](#logincheck) | **POST** /api/login_check | |
|[**register**](#register) | **POST** /api/authentication/register | |
|[**tokenRefresh**](#tokenrefresh) | **POST** /api/token/refresh | |

# **confirmRegistration**
> confirmRegistration(confirmUserRegistrationRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ConfirmUserRegistrationRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let confirmUserRegistrationRequest: ConfirmUserRegistrationRequest; //

const { status, data } = await apiInstance.confirmRegistration(
    confirmUserRegistrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmUserRegistrationRequest** | **ConfirmUserRegistrationRequest**|  | |


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successfully confirmed user registration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **loginCheck**
> LoginCheck200Response loginCheck(loginCheckRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    LoginCheckRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let loginCheckRequest: LoginCheckRequest; //User credentials

const { status, data } = await apiInstance.loginCheck(
    loginCheckRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginCheckRequest** | **LoginCheckRequest**| User credentials | |


### Return type

**LoginCheck200Response**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully confirmed user registration. |  -  |
|**401** | Invalid credentials. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register**
> register(registerUserRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    RegisterUserRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let registerUserRequest: RegisterUserRequest; //

const { status, data } = await apiInstance.register(
    registerUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerUserRequest** | **RegisterUserRequest**|  | |


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | User registered successfully. |  -  |
|**422** | Validation errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokenRefresh**
> LoginCheck200Response tokenRefresh()


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    TokenRefreshRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let tokenRefreshRequest: TokenRefreshRequest; // (optional)

const { status, data } = await apiInstance.tokenRefresh(
    tokenRefreshRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenRefreshRequest** | **TokenRefreshRequest**|  | |


### Return type

**LoginCheck200Response**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New access tokens. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

