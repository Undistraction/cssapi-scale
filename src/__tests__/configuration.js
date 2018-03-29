import { isObject } from 'ramda-adjunct'
import createScale from '../index'

describe(`configure()`, () => {
  describe(`with no arguments`, () => {
    it(`doesn't throw`, () => {
      expect(() => createScale()).not.toThrow()
    })

    it(`returns an object`, () => {
      expect(isObject(createScale())).toBeTruthy()
    })
  })

  describe(`with an invalid argument`, () => {
    it(`throws`, () => {
      const value = `x`
      expect(() => createScale(value)).toThrowMultiline(`
        [cssapi-scale] configure() Arguments included invalid value(s)
          – config: Wasn't Plain Object`)
    })
  })

  describe(`with invalid config param names`, () => {
    it(`throws`, () => {
      const value = { a: 1, b: 2 }

      expect(() => createScale(value)).toThrowMultiline(`
        [cssapi-scale] configure() Arguments included invalid value(s)
          – config: Object included key(s) not on whitelist: ['base', 'ratio']`)
    })
  })

  describe(`with invalid config param keys`, () => {
    it(`throws`, () => {
      const value = { base: `x`, ratio: `100%` }
      expect(() => createScale(value)).toThrowMultiline(`
        [cssapi-scale] configure() Arguments included invalid value(s)
          – config: Object included invalid value(s)
            – base: Wasn't Array or Wasn't Valid Number
            – ratio: Wasn't Valid Number`)
    })
  })
})
