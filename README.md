# Back-End

Deployment: <https://build-4--rule-engine.herokuapp.com>

## Types

```ts
/// Forms ///

type Form = {
  _id : number,
  name : string,
  data : object,
}

type InternalForm = {
  _id : number,
  name : string,
  data : string,
}

/// Trees ///

type Tree = {
  _id : number,
  form_id : number,
  name : string,
  data : object,
}

type InternalTree = {
  _id : number,
  form_id : number,
  name : string,
  data : string,
}

/// Users ///

type User = {
  _id : number,
  name : string | null,
  email : string,
  username : string,
}

type InternalUser = {
  _id : number,
  name : string | null,
  email : string,
  username : string,
  hash : string,
}

/// Responses ///

type InfoResponse = SuccessResponse & {
  info : object,
}

type SuccessResponse = {
  message : string,
  ...object,
}

type FailureResponse = {
  error : {
    message : string | object,
    status : number,
    method : string,
    route : string,
    ...object,
  },
}
```

## Base

| route | method | description                                | `request.body` | `response.body` | auth?   | status     |
|-------|--------|--------------------------------------------|----------------|-----------------|---------|------------|
| `/`   | `GET`  | Get info about available routes & methods. | none           | `InfoResponse`  | no      | **online** |

## Auth

| route     | method | description                                | `request.body` | `response.body` | auth?   | status     |
|-----------|--------|--------------------------------------------|----------------|-----------------|---------|------------|
| `/auth`   | `GET`  | Get info about available routes & methods. | none           | `InfoResponse`  | no      | **online** |

### Routes

| route            | method | description                            | `request.body`        | `response.body` | auth?   | status     |
|------------------|--------|----------------------------------------|-----------------------|-----------------|---------|------------|
| `/auth/sign-up`  | `POST` | Sign up (register) a new user.         | `Auth_SignUp_Request` | `Auth_Response` | no      | **online** |
| `/auth/sign-in`  | `POST` | Sign in (login) as an existing user.   | `Auth_SignIn_Request` | `Auth_Response` | no      | **online** |
| `/auth/sign-out` | `POST` | Sign out (logout) as an existing user. | none                  | TBD             | **yes** | stretch    |

#### Types

```ts
/// Requests ///

type Auth_SignUp_Request = {
  email : string,
  username : string,
  password : string,
}

type Auth_SignIn_Request = {
  username : string,
  password : string,
}

/// Responses ///

type Auth_Response = Auth_SuccessResponse | Auth_FailureResponse

type Auth_SuccessResponse = SuccessResponse & {
  user : User,
  token : string,
}

type Auth_FailureResponse = FailureResponse
```

## API

| route    | method | description                                | `request.body` | `response.body` | auth?   | status     |
|----------|--------|--------------------------------------------|----------------|-----------------|---------|------------|
| `/api`   | `GET`  | Get info about available routes & methods. | none           | `InfoResponse`  | **yes** | **online** |

### Forms Routes

| route                 | method   | description                      | `request.body`       | `response.body`                   | auth?   | status     |
|-----------------------|----------|----------------------------------|----------------------|-----------------------------------|---------|------------|
| `/api/forms`          | `GET`    | Get a list of all forms.         | none                 | `Array <Form> \| FailureResponse` | **yes** | **online** |
| `/api/forms`          | `POST`   | Add a new form.                  | `Forms_POST_Request` | `Form \| FailureResponse`         | **yes** | **online** |
| `/api/forms/:form_id` | `GET`    | Get a specific form by `_id`.    | none                 | `Form \| FailureResponse`         | **yes** | **online** |
| `/api/forms/:form_id` | `PUT`    | Update a specific form by `_id`. | `Forms_PUT_Request`  | `Form \| FailureResponse`         | **yes** | **online** |
| `/api/forms/:form_id` | `DELETE` | Delete a specific form by `_id`. | none                 | `Form \| FailureResponse`         | **yes** | **online** |

```ts
/// Requests ///

type Forms_POST_Request = {
  name : string,
  data : object,
}

type Forms_PUT_Request = {
  name ?: string,
  data ?: object,
}
```

### Trees Routes

| route                 | method   | description                      | `request.body`       | `response.body`                   | auth?   | status     |
|-----------------------|----------|----------------------------------|----------------------|-----------------------------------|---------|------------|
| `/api/trees`          | `GET`    | Get a list of all trees.         | none                 | `Array <Tree> \| FailureResponse` | **yes** | **online** |
| `/api/trees`          | `POST`   | Add a new tree.                  | `Trees_POST_Request` | `Tree \| FailureResponse`         | **yes** | **online** |
| `/api/trees/:tree_id` | `GET`    | Get a specific tree by `_id`.    | none                 | `Tree \| FailureResponse`         | **yes** | **online** |
| `/api/trees/:tree_id` | `PUT`    | Update a specific tree by `_id`. | `Trees_PUT_Request`  | `Tree \| FailureResponse`         | **yes** | **online** |
| `/api/trees/:tree_id` | `DELETE` | Delete a specific tree by `_id`. | none                 | `Tree \| FailureResponse`         | **yes** | **online** |

```ts
/// Requests ///

type Trees_POST_Request = {
  form_id : number,
  name : string,
  data : object,
}

type Trees_PUT_Request = {
  form_id ?: number,
  name ?: string,
  data ?: object,
}
```

### Users Routes

| route                 | method | description                 | `request.body` | `response.body`                   | auth?   | status     |
|-----------------------|--------|-----------------------------|----------------|-----------------------------------|---------|------------|
| `/api/users`          | `GET`  | Get list of all users.      | none           | `Array <User> \| FailureResponse` | **yes** | **online** |
| `/api/users/:user_id` | `GET`  | Get specific list by `_id`. | none           | `User \| FailureResponse`         | **yes** | **online** |
