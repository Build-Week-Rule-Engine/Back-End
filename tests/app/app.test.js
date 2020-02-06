/**************************************/

const request = require ('supertest')

const { config, app } = require ('./__needs')

const BASE = '/'

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

      /// STATUS CODE? ///

      test (`responds with 200 OK`, async () => {

        return (
          await request (app)
          .get (BASE)
          .then ((re) => {
            expect (re.status) .toEqual (200)
          })
        )

      })

      /// RESPONSE TYPE? ///

      test (`responds with JSON body`, async () => {

        return (
          await request (app)
          .get (BASE)
          .then ((re) => {
            expect (re.type).toMatch (/json/i)
          })
        )

      })

    })

  }

})
