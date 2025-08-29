# FoodIngredientResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the food ingredient | [default to undefined]
**foodId** | **string** | Unique identifier of the food | [default to undefined]
**ingredientId** | **string** | Unique identifier of the ingredient | [default to undefined]
**ingredient** | [**IngredientResponse**](IngredientResponse.md) |  | [default to undefined]
**amount** | **number** | Amount of the ingredient | [default to undefined]
**unit** | **string** | Unit of measurement for the ingredient amount | [default to undefined]

## Example

```typescript
import { FoodIngredientResponse } from 'ratemanu-api-client';

const instance: FoodIngredientResponse = {
    id,
    foodId,
    ingredientId,
    ingredient,
    amount,
    unit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
