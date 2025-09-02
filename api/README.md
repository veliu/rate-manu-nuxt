## ratemanu-api-client@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install ratemanu-api-client@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthenticationApi* | [**confirmRegistration**](docs/AuthenticationApi.md#confirmregistration) | **POST** /api/authentication/confirm-registration | 
*AuthenticationApi* | [**loginCheck**](docs/AuthenticationApi.md#logincheck) | **POST** /api/login_check | 
*AuthenticationApi* | [**register**](docs/AuthenticationApi.md#register) | **POST** /api/authentication/register | 
*AuthenticationApi* | [**tokenRefresh**](docs/AuthenticationApi.md#tokenrefresh) | **POST** /api/token/refresh | 
*FoodApi* | [**foodCreate**](docs/FoodApi.md#foodcreate) | **POST** /api/food/ | 
*FoodApi* | [**foodDelete**](docs/FoodApi.md#fooddelete) | **DELETE** /api/food/{id} | 
*FoodApi* | [**foodGet**](docs/FoodApi.md#foodget) | **GET** /api/food/{id} | 
*FoodApi* | [**foodSearch**](docs/FoodApi.md#foodsearch) | **GET** /api/food/ | 
*FoodApi* | [**foodUpdate**](docs/FoodApi.md#foodupdate) | **PUT** /api/food/{id} | 
*FoodCommentsApi* | [**foodCommentsCreate**](docs/FoodCommentsApi.md#foodcommentscreate) | **POST** /api/food/{id}/comment | 
*FoodCommentsApi* | [**foodCommentsGet**](docs/FoodCommentsApi.md#foodcommentsget) | **GET** /api/food/{id}/comment | 
*FoodImagesApi* | [**foodImagesUpdate**](docs/FoodImagesApi.md#foodimagesupdate) | **POST** /api/food/{id}/update-image | 
*FoodIngredientsApi* | [**foodIngredientsCreate**](docs/FoodIngredientsApi.md#foodingredientscreate) | **POST** /api/food/{foodId}/ingredients | 
*FoodIngredientsApi* | [**foodIngredientsDelete**](docs/FoodIngredientsApi.md#foodingredientsdelete) | **DELETE** /api/food/{foodId}/ingredients{ingredientId} | 
*FoodIngredientsApi* | [**foodIngredientsGet**](docs/FoodIngredientsApi.md#foodingredientsget) | **GET** /api/food/{foodId}/ingredients | 
*FoodRatingApi* | [**foodRatingGet**](docs/FoodRatingApi.md#foodratingget) | **GET** /api/food-rating/{foodId} | 
*FoodRatingApi* | [**foodRatingGetPersonal**](docs/FoodRatingApi.md#foodratinggetpersonal) | **GET** /api/food-rating/my/{foodId} | 
*FoodRatingApi* | [**foodRatingUpsert**](docs/FoodRatingApi.md#foodratingupsert) | **POST** /api/food-rating/ | 
*IngredientApi* | [**ingredientCreate**](docs/IngredientApi.md#ingredientcreate) | **POST** /api/ingredient/ | 
*IngredientApi* | [**ingredientGet**](docs/IngredientApi.md#ingredientget) | **GET** /api/ingredient/{id} | 
*IngredientApi* | [**ingredientSearch**](docs/IngredientApi.md#ingredientsearch) | **GET** /api/ingredient/ | 
*UserApi* | [**meGet**](docs/UserApi.md#meget) | **GET** /api/user/me | 
*UserApi* | [**meUpdate**](docs/UserApi.md#meupdate) | **PUT** /api/user/me | 
*UserApi* | [**userGroups**](docs/UserApi.md#usergroups) | **GET** /api/user/my-groups | 
*UserApi* | [**userInvite**](docs/UserApi.md#userinvite) | **POST** /api/user/invite | 


### Documentation For Models

 - [CommentCollectionResponse](docs/CommentCollectionResponse.md)
 - [CommentResponse](docs/CommentResponse.md)
 - [ConfirmUserRegistrationRequest](docs/ConfirmUserRegistrationRequest.md)
 - [CreateCommentRequest](docs/CreateCommentRequest.md)
 - [CreateFoodIngredientRequest](docs/CreateFoodIngredientRequest.md)
 - [CreateFoodIngredientsRequest](docs/CreateFoodIngredientsRequest.md)
 - [CreateFoodRequest](docs/CreateFoodRequest.md)
 - [CreateIngredientRequest](docs/CreateIngredientRequest.md)
 - [Filter](docs/Filter.md)
 - [FilterValue](docs/FilterValue.md)
 - [FoodCollectionResponse](docs/FoodCollectionResponse.md)
 - [FoodIngredientCollectionResponse](docs/FoodIngredientCollectionResponse.md)
 - [FoodIngredientResponse](docs/FoodIngredientResponse.md)
 - [FoodResponse](docs/FoodResponse.md)
 - [GroupMemberResponse](docs/GroupMemberResponse.md)
 - [GroupResponse](docs/GroupResponse.md)
 - [IngredientCollectionResponse](docs/IngredientCollectionResponse.md)
 - [IngredientResponse](docs/IngredientResponse.md)
 - [InviteUserRequest](docs/InviteUserRequest.md)
 - [LoginCheck200Response](docs/LoginCheck200Response.md)
 - [LoginCheckRequest](docs/LoginCheckRequest.md)
 - [PersonalRatingResponse](docs/PersonalRatingResponse.md)
 - [RatingCollectionResponse](docs/RatingCollectionResponse.md)
 - [RatingResponse](docs/RatingResponse.md)
 - [RegisterUserRequest](docs/RegisterUserRequest.md)
 - [Role](docs/Role.md)
 - [SearchQueryString](docs/SearchQueryString.md)
 - [Sorting](docs/Sorting.md)
 - [Status](docs/Status.md)
 - [TokenRefreshRequest](docs/TokenRefreshRequest.md)
 - [UpdateFoodRequest](docs/UpdateFoodRequest.md)
 - [UpdateUserRequest](docs/UpdateUserRequest.md)
 - [UpsertRatingRequest](docs/UpsertRatingRequest.md)
 - [UserGroupsResponse](docs/UserGroupsResponse.md)
 - [UserResponse](docs/UserResponse.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="Bearer"></a>
### Bearer

- **Type**: Bearer authentication (JWT)

