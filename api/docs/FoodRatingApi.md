# FoodRatingApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**foodRatingGet**](#foodratingget) | **GET** /api/food-rating/{foodId} | |
|[**foodRatingGetPersonal**](#foodratinggetpersonal) | **GET** /api/food-rating/my/{foodId} | |
|[**foodRatingUpsert**](#foodratingupsert) | **POST** /api/food-rating/ | |

# **foodRatingGet**
> RatingCollectionResponse foodRatingGet()


### Example

```typescript
import {
    FoodRatingApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodRatingApi(configuration);

let foodId: string; //The ID of the food (default to undefined)

const { status, data } = await apiInstance.foodRatingGet(
    foodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **foodId** | [**string**] | The ID of the food | defaults to undefined|


### Return type

**RatingCollectionResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns ratings from all members |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **foodRatingGetPersonal**
> PersonalRatingResponse foodRatingGetPersonal()


### Example

```typescript
import {
    FoodRatingApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodRatingApi(configuration);

let foodId: string; //The ID of the food (default to undefined)

const { status, data } = await apiInstance.foodRatingGetPersonal(
    foodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **foodId** | [**string**] | The ID of the food | defaults to undefined|


### Return type

**PersonalRatingResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a personal food rating |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **foodRatingUpsert**
> PersonalRatingResponse foodRatingUpsert(upsertRatingRequest)


### Example

```typescript
import {
    FoodRatingApi,
    Configuration,
    UpsertRatingRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodRatingApi(configuration);

let upsertRatingRequest: UpsertRatingRequest; //

const { status, data } = await apiInstance.foodRatingUpsert(
    upsertRatingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertRatingRequest** | **UpsertRatingRequest**|  | |


### Return type

**PersonalRatingResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updates a food rating |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

