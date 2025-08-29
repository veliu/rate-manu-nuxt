# IngredientApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ingredientCreate**](#ingredientcreate) | **POST** /api/ingredient/ | |
|[**ingredientGet**](#ingredientget) | **GET** /api/ingredient/{id} | |
|[**ingredientSearch**](#ingredientsearch) | **GET** /api/ingredient/ | |

# **ingredientCreate**
> IngredientResponse ingredientCreate(createIngredientRequest)


### Example

```typescript
import {
    IngredientApi,
    Configuration,
    CreateIngredientRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new IngredientApi(configuration);

let createIngredientRequest: CreateIngredientRequest; //

const { status, data } = await apiInstance.ingredientCreate(
    createIngredientRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIngredientRequest** | **CreateIngredientRequest**|  | |


### Return type

**IngredientResponse**

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

# **ingredientGet**
> IngredientResponse ingredientGet()


### Example

```typescript
import {
    IngredientApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new IngredientApi(configuration);

let id: string; //The ID of the ingredient (default to undefined)

const { status, data } = await apiInstance.ingredientGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the ingredient | defaults to undefined|


### Return type

**IngredientResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns food |  -  |
|**404** | Ingredient does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ingredientSearch**
> IngredientCollectionResponse ingredientSearch()


### Example

```typescript
import {
    IngredientApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new IngredientApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let sorting: Array<Sorting>; // (optional) (default to undefined)
let filter: Array<Filter>; // (optional) (default to undefined)

const { status, data } = await apiInstance.ingredientSearch(
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

**IngredientCollectionResponse**

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

