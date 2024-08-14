# .FoodApi

All URIs are relative to _http://localhost_

| Method                                                                                                                        | HTTP request        | Description |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| [**getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch**](FoodApi.md#getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch)   | **GET** /api/food/  |
| [**postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate**](FoodApi.md#postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate) | **POST** /api/food/ |

# **getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch**

> FoodCollectionResponse getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch()

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FoodApi(configuration);

let body:any = {};

apiInstance.getVeliuRatemanuApplicationRestapiFoodFoodcrudSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

**FoodCollectionResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **200**     | Returns food search result | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate**

> postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate(createFoodRequest)

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FoodApi(configuration);

let body:.FoodApiPostVeliuRatemanuApplicationRestapiFoodFoodcrudCreateRequest = {
  // CreateFoodRequest
  createFoodRequest: {
    id: "id_example",
    name: "name_example",
    description: "description_example",
  },
};

apiInstance.postVeliuRatemanuApplicationRestapiFoodFoodcrudCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name                  | Type                  | Description | Notes |
| --------------------- | --------------------- | ----------- | ----- |
| **createFoodRequest** | **CreateFoodRequest** |             |

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
