# CreateFoodIngredientRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Will be generated if not provided | [optional] [default to undefined]
**ingredientId** | **string** |  | [default to undefined]
**unit** | **string** | If not provided, default unit will be used | [optional] [default to undefined]
**amount** | **number** | Numeric value. Will be converted to floating point if needed. | [default to undefined]

## Example

```typescript
import { CreateFoodIngredientRequest } from 'ratemanu-api-client';

const instance: CreateFoodIngredientRequest = {
    id,
    ingredientId,
    unit,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
