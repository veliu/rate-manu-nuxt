# FoodImagesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**foodImagesUpdate**](#foodimagesupdate) | **POST** /api/food/{id}/update-image | |

# **foodImagesUpdate**
> FoodResponse foodImagesUpdate()


### Example

```typescript
import {
    FoodImagesApi,
    Configuration
} from 'ratemanu-api-client';

const configuration = new Configuration();
const apiInstance = new FoodImagesApi(configuration);

let id: string; //The ID of the food (default to undefined)
let image: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.foodImagesUpdate(
    id,
    image
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the food | defaults to undefined|
| **image** | [**File**] |  | (optional) defaults to undefined|


### Return type

**FoodResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated food image. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

