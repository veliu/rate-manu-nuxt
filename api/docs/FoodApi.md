# FoodApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**foodCreate**](#foodcreate) | **POST** /api/food/ | |
|[**foodDelete**](#fooddelete) | **DELETE** /api/food/{id} | |
|[**foodGet**](#foodget) | **GET** /api/food/{id} | |
|[**foodSearch**](#foodsearch) | **GET** /api/food/ | |
|[**foodUpdate**](#foodupdate) | **PUT** /api/food/{id} | |

# **foodCreate**
> FoodResponse foodCreate(createFoodRequest)


### Example

```typescript
import {
    FoodApi,
    Configuration,
    CreateFoodRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodApi(configuration);

let createFoodRequest: CreateFoodRequest; //

const { status, data } = await apiInstance.foodCreate(
    createFoodRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFoodRequest** | **CreateFoodRequest**|  | |


### Return type

**FoodResponse**

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

# **foodDelete**
> foodDelete()


### Example

```typescript
import {
    FoodApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodApi(configuration);

let id: string; //The ID of the food (default to undefined)

const { status, data } = await apiInstance.foodDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the food | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Food deleted |  -  |
|**404** | Food does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **foodGet**
> FoodResponse foodGet()


### Example

```typescript
import {
    FoodApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodApi(configuration);

let id: string; //The ID of the food (default to undefined)

const { status, data } = await apiInstance.foodGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the food | defaults to undefined|


### Return type

**FoodResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns food |  -  |
|**404** | Food does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **foodSearch**
> FoodCollectionResponse foodSearch()


### Example

```typescript
import {
    FoodApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let sorting: Array<Sorting>; // (optional) (default to undefined)
let filter: Array<Filter>; // (optional) (default to undefined)

const { status, data } = await apiInstance.foodSearch(
    offset,
    limit,
    sorting,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **sorting** | **Array&lt;Sorting&gt;** |  | (optional) defaults to undefined|
| **filter** | **Array&lt;Filter&gt;** |  | (optional) defaults to undefined|


### Return type

**FoodCollectionResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns food search result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **foodUpdate**
> FoodResponse foodUpdate(updateFoodRequest)


### Example

```typescript
import {
    FoodApi,
    Configuration,
    UpdateFoodRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodApi(configuration);

let id: string; //The ID of the food (default to undefined)
let updateFoodRequest: UpdateFoodRequest; //

const { status, data } = await apiInstance.foodUpdate(
    id,
    updateFoodRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFoodRequest** | **UpdateFoodRequest**|  | |
| **id** | [**string**] | The ID of the food | defaults to undefined|


### Return type

**FoodResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns updated food |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

