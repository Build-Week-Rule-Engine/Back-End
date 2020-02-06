/**************************************/

const request = require ('supertest')

const { config, app } = require ('./__needs')

/**************************************/

describe ('/api/users', () => {

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

  }

})
