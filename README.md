# Back-End

## API

### Types

#### `User`

```js
type User = {
  _id : number,
  username : string,
  email : string,
}
```

### User Auth Routes

| route                | method | description                            | auth? | `request.body`                                             | `response.body`                                     | stage        |
|----------------------|--------|----------------------------------------|-------|------------------------------------------------------------|-----------------------------------------------------|--------------|
| `/api/auth/sign-up`  | `POST` | Sign up (register) a new user.         | no    | `{ username : string, email : string, password : string }` | `{ message : string, user : User, token : string }` | **required** |
| `/api/auth/sign-in`  | `POST` | Sign in (login) as an existing user.   | no    | `{ username \| email : string, password : string }`        | `{ message : string, user : User, token : string }` | **required** |
| `/api/auth/sign-out` | `POST` | Sign out (logout) as an existing user. | yes   | none                                                       | `{ message : string, user : User }`                 | stretch      |

### More Routes...

TBD
