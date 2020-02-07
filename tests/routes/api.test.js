/**************************************/

const request = require ('supertest')

const { config, app, database : { db }, TEST_DATA } = require ('./__needs')

const BASE = '/api'

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
      let token

      beforeAll (async () => {
        await db ('Users').truncate ()

        await request (app)
        .post ('/auth/sign-up')
        .send (TEST_DATA.SignUp.good)
        .then ((re) => {
          console.log (re.body)
          token = re.body.token
        })
      })

      afterAll (async () => {
        await db ('Users').truncate ()
      })

      /// STATUS CODE? ///

      test (`responds with 200 OK`, async () => {

        return (
          await request (app)
          .get (PATH)
          .set ('Authorization', token)
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
          .set ('Authorization', token)
          .then ((re) => {
            expect (re.type).toMatch (/json/i)
          })
        )

      })

    })

  }

})
