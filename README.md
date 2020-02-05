# Back-End

## API

### Types

```ts
/// Forms ///

type Form = {
  _id : number,
  name : string,
  data : object,
}

/// Trees ///

type Tree = {
  _id : number,
  name : string,
  data : object,
}

/// Users ///

type OwnUser = {
  _id : number,
  username : string,
  email : string,
}

type OtherUser = {
  _id : number,
  username : string,
}

/// Responses ///

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

### User Auth Routes

| route            | method | description                            | auth? | `request.body`        | `response.body` | status     |
|------------------|--------|----------------------------------------|-------|-----------------------|-----------------|------------|
| `/auth/sign-up`  | `POST` | Sign up (register) a new user.         | no    | `Auth_SignUp_Request` | `Auth_Response` | **online** |
| `/auth/sign-in`  | `POST` | Sign in (login) as an existing user.   | no    | `Auth_SignIn_Request` | `Auth_Response` | **online** |
| `/auth/sign-out` | `POST` | Sign out (logout) as an existing user. | yes   | none                  | TBD             | stretch    |

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
  user : OwnUser,
  token : string,
}

type Auth_FailureResponse = FailureResponse
```

### Forms Routes

| route                 | method   | description                      | auth? | `request.body`       | `response.body`                  | status          |
|-----------------------|----------|----------------------------------|-------|----------------------|----------------------------------|-----------------|
| `/api/forms`          | `GET`    | Get a list of all forms.         | TBD   | none                 | `Array <Form> | FailureResponse` | **in progress** |
| `/api/forms`          | `POST`   | Add a new form.                  | TBD   | `Forms_POST_Request` | `Form | FailureResponse`         | **in progress** |
| `/api/forms/:form_id` | `GET`    | Get a specific form by `_id`.    | TBD   | none                 | `Form | FailureResponse`         | **in progress** |
| `/api/forms/:form_id` | `PUT`    | Update a specific form by `_id`. | TBD   | `Forms_PUT_Request`  | `Form | FailureResponse`         | **in progress** |
| `/api/forms/:form_id` | `DELETE` | Delete a specific form by `_id`. | TBD   | none                 | `Form | FailureResponse`         | **in progress** |

```ts
/// Requests ///

type Forms_POST_Request = {
  name : string,
  data : string,
}

type Forms_PUT_Request = {
  name ?: string,
  data ?: string,
}
```

### Users Routes

| route                 | method | description                 | auth? | `request.body` | `response.body`                        | status          |
|-----------------------|--------|-----------------------------|-------|----------------|----------------------------------------|-----------------|
| `/api/users`          | `GET`  | Get list of all users.      | TBD   | none           | `Array <PublicUser> | FailureResponse` | **in progress** |
| `/api/users/:user_id` | `GET`  | Get specific list by `_id`. | TBD   | none           | `PublicUser | FailureResponse`         | **in progress** |

### More Routes...

TBD
