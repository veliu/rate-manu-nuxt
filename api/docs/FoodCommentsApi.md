# FoodCommentsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**foodCommentsCreate**](#foodcommentscreate) | **POST** /api/food/{id}/comment | |
|[**foodCommentsGet**](#foodcommentsget) | **GET** /api/food/{id}/comment | |

# **foodCommentsCreate**
> CommentResponse foodCommentsCreate(createCommentRequest)


### Example

```typescript
import {
    FoodCommentsApi,
    Configuration,
    CreateCommentRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodCommentsApi(configuration);

let id: string; // (default to undefined)
let createCommentRequest: CreateCommentRequest; //

const { status, data } = await apiInstance.foodCommentsCreate(
    id,
    createCommentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommentRequest** | **CreateCommentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommentResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns food |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **foodCommentsGet**
> CommentCollectionResponse foodCommentsGet()


### Example

```typescript
import {
    FoodCommentsApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodCommentsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.foodCommentsGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommentCollectionResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns food |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

