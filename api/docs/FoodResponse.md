# FoodResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**author** | **string** |  | [default to undefined]
**group** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**image** | **string** |  | [optional] [default to undefined]
**averageRating** | **number** |  | [default to undefined]
**ratings** | **Array&lt;string&gt;** |  | [default to undefined]
**comments** | **Array&lt;string&gt;** |  | [default to undefined]
**personalRating** | [**RatingResponse**](RatingResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FoodResponse } from 'ratemanu-api-client';

const instance: FoodResponse = {
    id,
    name,
    description,
    author,
    group,
    createdAt,
    updatedAt,
    image,
    averageRating,
    ratings,
    comments,
    personalRating,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
