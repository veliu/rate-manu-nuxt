# .DefaultApi

All URIs are relative to _http://localhost_

| Method                                                                                                                                                                                         | HTTP request                                      | Description |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |
| [**getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke**](DefaultApi.md#getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke)   | **GET** /api/authentication/confirm-registration  |
| [**getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke**](DefaultApi.md#getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke)                                             | **GET** /api/authentication/me                    |
| [**postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke**](DefaultApi.md#postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke) | **POST** /api/authentication/confirm-registration |
| [**postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke**](DefaultApi.md#postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke)                       | **POST** /api/authentication/register             |
| [**postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate**](DefaultApi.md#postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate)                                                       | **POST** /api/rating/                             |
| [**postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke**](DefaultApi.md#postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke)                                               | **POST** /api/user/invite/{emailAddress}          |
| [**putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate**](DefaultApi.md#putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate)                                                         | **PUT** /api/rating/{id}                          |

# **getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke**

> getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeRequest = {
  // string
  token: "token_example",
};

apiInstance.getVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name      | Type         | Description | Notes                 |
| --------- | ------------ | ----------- | --------------------- |
| **token** | [**string**] |             | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke**

> getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getVeliuRatemanuApplicationRestapiAuthenticationMeactionInvoke(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke**

> postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvokeRequest = {
  // string
  token: "token_example",
};

apiInstance.postVeliuRatemanuApplicationRestapiAuthenticationConfirmuserregistrationactionInvoke(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name      | Type         | Description | Notes                 |
| --------- | ------------ | ----------- | --------------------- |
| **token** | [**string**] |             | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke**

> void postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke(registerUserRequest)

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvokeRequest = {
  // RegisterUserRequest
  registerUserRequest: {
    email: "email_example",
    password: "jUR,rZ#UM/?R,Fp^l6$ARjEJk C>i H'qT\{<?'es#)#iK.YM{Rag2/!KB!k@5oXh.:Ts";mGL,i&z5[P@M"lzfB+Y,Twzfu~N^z"mfqecVU{S2{QA<Y8XX0<}J;Krm9W'g~?)DvDDLV-'(u+-7Tfp&\`F+7-?{%@=iEPLVY*a@A[b_6cfy~~0GcD_@b4Y=U?",
  },
};

apiInstance.postVeliuRatemanuApplicationRestapiAuthenticationRegisteruseractionInvoke(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name                    | Type                    | Description | Notes |
| ----------------------- | ----------------------- | ----------- | ----- |
| **registerUserRequest** | **RegisterUserRequest** |             |

### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **204**     | User registered successfully. | -                |
| **422**     | Validation errors.            | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate**

> postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate(createRatingRequest)

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostVeliuRatemanuApplicationRestapiRatingRatingcrudCreateRequest = {
  // CreateRatingRequest
  createRatingRequest: {
    id: "id_example",
    food: "food_example",
    rating: 1,
  },
};

apiInstance.postVeliuRatemanuApplicationRestapiRatingRatingcrudCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name                    | Type                    | Description | Notes |
| ----------------------- | ----------------------- | ----------- | ----- |
| **createRatingRequest** | **CreateRatingRequest** |             |

### Return type

void (empty response body)

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke**

> postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostVeliuRatemanuApplicationRestapiUserInviteuseractionInvokeRequest = {
  // string
  emailAddress: "emailAddress_example",
};

apiInstance.postVeliuRatemanuApplicationRestapiUserInviteuseractionInvoke(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name             | Type         | Description | Notes                 |
| ---------------- | ------------ | ----------- | --------------------- |
| **emailAddress** | [**string**] |             | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate**

> putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate(updateRatingRequest)

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPutVeliuRatemanuApplicationRestapiRatingRatingcrudUpdateRequest = {
  // string
  id: "id_example",
  // UpdateRatingRequest
  updateRatingRequest: {
    rating: 1,
  },
};

apiInstance.putVeliuRatemanuApplicationRestapiRatingRatingcrudUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name                    | Type                    | Description | Notes                 |
| ----------------------- | ----------------------- | ----------- | --------------------- |
| **updateRatingRequest** | **UpdateRatingRequest** |             |
| **id**                  | [**string**]            |             | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
