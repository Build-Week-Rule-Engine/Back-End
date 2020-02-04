# Back-End

## API

### Types

#### `Forms`

```ts
type Form = {
  _id : number,
  name : string,
  data : object,
}
```

#### `Trees`

```ts
type Tree = {
  _id : number,
  name : string,
  data : object,
}
```

#### `Users`

```ts
type OwnUser = {
  _id : number,
  username : string,
  email : string,
}

type OtherUser = {
  _id : number,
  username : string,
}
```

#### `Responses`

```ts
type SuccessResponse = {
  message : string,
  ...object,
}
```

```ts
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

| route                | method | description                            | auth? | `request.body`        | `response.body` | status     |
|----------------------|--------|----------------------------------------|-------|-----------------------|-----------------|------------|
| `/api/auth/sign-up`  | `POST` | Sign up (register) a new user.         | no    | `Auth_SignUp_Request` | `Auth_Response` | **online** |
| `/api/auth/sign-in`  | `POST` | Sign in (login) as an existing user.   | no    | `Auth_SignIn_Request` | `Auth_Response` | **online** |
| `/api/auth/sign-out` | `POST` | Sign out (logout) as an existing user. | yes   | none                  | TBD             | stretch    |

#### Types

```ts
type Auth_SignUp_Request = {
  email : string,
  username : string,
  password : string,
}

type Auth_SignIn_Request = {
  username : string,
  password : string,
}

type Auth_Response = Auth_SuccessResponse | Auth_FailureResponse

type Auth_SuccessResponse = SuccessResponse & {
  user : OwnUser,
  token : string,
}

type Auth_FailureResponse = FailureResponse
```

### More Routes...

TBD
