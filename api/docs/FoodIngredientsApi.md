# FoodIngredientsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**foodIngredientsAdd**](#foodingredientsadd) | **POST** /api/food/{foodId}/ingredients | |
|[**foodIngredientsRead**](#foodingredientsread) | **GET** /api/food/{foodId}/ingredients | |

# **foodIngredientsAdd**
> Array<FoodIngredientResponse> foodIngredientsAdd(createFoodIngredientsRequest)


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

const { status, data } = await apiInstance.foodIngredientsAdd(
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

**Array<FoodIngredientResponse>**

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

# **foodIngredientsRead**
> Array<FoodIngredientResponse> foodIngredientsRead()


### Example

```typescript
import {
    FoodIngredientsApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodIngredientsApi(configuration);

let foodId: string; //The ID of the food (default to undefined)

const { status, data } = await apiInstance.foodIngredientsRead(
    foodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **foodId** | [**string**] | The ID of the food | defaults to undefined|


### Return type

**Array<FoodIngredientResponse>**

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

