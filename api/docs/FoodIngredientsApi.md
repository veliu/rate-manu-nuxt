# FoodIngredientsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**foodIngredientsCreate**](#foodingredientscreate) | **POST** /api/food/{foodId}/ingredients | |
|[**foodIngredientsDelete**](#foodingredientsdelete) | **DELETE** /api/food/{foodId}/ingredients{ingredientId} | |
|[**foodIngredientsGet**](#foodingredientsget) | **GET** /api/food/{foodId}/ingredients | |

# **foodIngredientsCreate**
> FoodIngredientCollectionResponse foodIngredientsCreate(createFoodIngredientsRequest)


### Example

```typescript
import {
    FoodIngredientsApi,
    Configuration,
    CreateFoodIngredientsRequest
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodIngredientsApi(configuration);

let foodId: string; //The ID of the food (default to undefined)
let createFoodIngredientsRequest: CreateFoodIngredientsRequest; //

const { status, data } = await apiInstance.foodIngredientsCreate(
    foodId,
    createFoodIngredientsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFoodIngredientsRequest** | **CreateFoodIngredientsRequest**|  | |
| **foodId** | [**string**] | The ID of the food | defaults to undefined|


### Return type

**FoodIngredientCollectionResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns food ingredients |  -  |
|**404** | Food does not exist |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **foodIngredientsDelete**
> FoodIngredientCollectionResponse foodIngredientsDelete()


### Example

```typescript
import {
    FoodIngredientsApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodIngredientsApi(configuration);

let foodId: string; //The ID of the food (default to undefined)
let ingredientId: string; //The ID of the ingredient (default to undefined)

const { status, data } = await apiInstance.foodIngredientsDelete(
    foodId,
    ingredientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **foodId** | [**string**] | The ID of the food | defaults to undefined|
| **ingredientId** | [**string**] | The ID of the ingredient | defaults to undefined|


### Return type

**FoodIngredientCollectionResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns food ingredients |  -  |
|**404** | Food does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **foodIngredientsGet**
> FoodIngredientCollectionResponse foodIngredientsGet()


### Example

```typescript
import {
    FoodIngredientsApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodIngredientsApi(configuration);

let foodId: string; //The ID of the food (default to undefined)

const { status, data } = await apiInstance.foodIngredientsGet(
    foodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **foodId** | [**string**] | The ID of the food | defaults to undefined|


### Return type

**FoodIngredientCollectionResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns food ingredients |  -  |
|**404** | Food does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

