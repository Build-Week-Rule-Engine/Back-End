/**************************************/

const request = require ('supertest')

const { config, app, database : { db }, TEST_DATA } = require ('./__needs')

const BASE = '/auth'

/**************************************/

describe (BASE, () => {

  /// STUFF HAPPENS AT ALL ///
  test (`runs tests`, () => {

    expect (true).toBe (true)

  })

  /// CHECK NODE ENVIRONMENT ///
  describe (`node environment`, () => {

    test (`needs to be testing`, () => {

      expect (config.NODE_ENV).toEqual ('testing')

    })

  })

  /// ONLY DO THIS IF IN TESTING MODE ///

  if (config.NODE_ENV === 'testing') {

    /// ROUTE INFO ///

    describe (`GET ${BASE}`, () => {

      const PATH = BASE

      /// STATUS CODE? ///

      test (`responds with 200 OK`, async () => {

        return (
          await request (app)
          .get (PATH)
          .then ((re) => {
            expect (re.status).toEqual (200)
          })
        )

      })

      /// RESPONSE TYPE? ///

      test (`responds with JSON body`, async () => {

        return (
          await request (app)
          .get (PATH)
          .then ((re) => {
            expect (re.type).toMatch (/json/i)
          })
        )

      })

    })

    /***************************************
      USER SIGN-UP
    ***************************************/

    describe (`POST ${BASE}/sign-up`, async () => {

      const PATH = BASE + '/sign-up'

      beforeEach (async () => {
        await db ('Users').truncate ()
      })

      afterAll (async () => {
        await db ('Users').truncate ()
      })

      /// BAD REQUESTS ARE BAD? ///

      describe (`what happens when request does not have username, password`, async () => {

        /// STATUS CODE? ///

        test (`responds with 400 BAD REQUEST`, async () => {

          return (
            await request (app)
            .post (PATH)
            .send (TEST_DATA.SignUp.bad)
            .then ((re) => {
              expect (re.status).toEqual (400)
            })
          )

        })

        /// RESPONSE TYPE? ///

        test (`responds with JSON body`, async () => {

          return (
            await request (app)
            .post (PATH)
            .send (TEST_DATA.SignUp.bad)
            .then ((re) => {
              expect (re.type).toMatch (/json/i)
            })
          )

        })

      })

      /// GOOD REQUESTS ARE GOOD? ///

      describe (`what happens when request has username, password`, async () => {

        /// STATUS CODE? ///

        test (`responds with 200 OK`, async () => {

          return (
            await request (app)
            .post (PATH)
            .send (TEST_DATA.SignUp.good)
            .then ((re) => {
              expect (re.status).toEqual (200)
            })
          )

        })

        /// RESPONSE TYPE? ///

        test (`responds with JSON body`, async () => {

          return (
            await request (app)
            .post (PATH)
            .send (TEST_DATA.SignUp.good)
            .then ((re) => {
              expect (re.type).toMatch (/json/i)
            })
          )

        })

      })

    })

    /***************************************
      USER SIGN-IN
    ***************************************/

    describe (`POST ${BASE}/sign-in`, async () => {

      const PATH = BASE + '/sign-in'

      beforeAll (async () => {
        await db ('users').truncate ()

        await request (app)
        .post (BASE + '/sign-up')
        .send (TEST_DATA.SignUp.good)
        .then ((re) => {})
      })

      afterAll (async () => {
        await db ('users').truncate ()
      })

      /// BAD REQUESTS ARE BAD? ///

      describe (`what happens when request does not have username, password`, async () => {

        /// STATUS CODE? ///

        test (`responds with 400 BAD REQUEST`, async () => {

          return (
            await request (app)
            .post (PATH)
            .send (TEST_DATA.SignIn.bad)
            .then ((re) => {
              expect (re.status).toEqual (400)
            })
          )

        })

        /// RESPONSE TYPE? ///

        test (`responds with JSON body`, async () => {

          return (
            await request (app)
            .post (PATH)
            .send (TEST_DATA.SignIn.bad)
            .then ((re) => {
              expect (re.type).toMatch (/json/i)
            })
          )

        })

      })

      /// GOOD REQUESTS ARE GOOD? ///

      describe (`what happens when request has username, password`, async () => {

        /// STATUS CODE? ///

        test (`responds with 200 OK`, async () => {

          return (
            await request (app)
            .post (PATH)
            .send (TEST_DATA.SignIn.good)
            .then ((re) => {
              expect (re.status).toEqual (200)
            })
          )

        })

        /// RESPONSE TYPE? ///

        test (`responds with JSON body`, async () => {

          return (
            await request (app)
            .post (PATH)
            .send (TEST_DATA.SignIn.good)
            .then ((re) => {
              expect (re.type).toMatch (/json/i)
            })
          )

        })

      })

    })

  }

})
