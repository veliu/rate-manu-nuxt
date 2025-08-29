# UserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**meGet**](#meget) | **GET** /api/user/me | |
|[**meUpdate**](#meupdate) | **PUT** /api/user/me | |
|[**userGroups**](#usergroups) | **GET** /api/user/my-groups | |
|[**userInvite**](#userinvite) | **POST** /api/user/invite | |

# **meGet**
> UserResponse meGet()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.meGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **meUpdate**
> UserResponse meUpdate(updateUserRequest)


### Example

```typescript
import {
    UserApi,
    Configuration,
    UpdateUserRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let updateUserRequest: UpdateUserRequest; //

const { status, data } = await apiInstance.meUpdate(
    updateUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserRequest** | **UpdateUserRequest**|  | |


### Return type

**UserResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated user data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userGroups**
> UserGroupsResponse userGroups()


### Example

```typescript
import {
    UserApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.userGroups();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserGroupsResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User group details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userInvite**
> userInvite(inviteUserRequest)


### Example

```typescript
import {
    UserApi,
    Configuration,
    InviteUserRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let inviteUserRequest: InviteUserRequest; //

const { status, data } = await apiInstance.userInvite(
    inviteUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteUserRequest** | **InviteUserRequest**|  | |


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
|**204** | User invited |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

