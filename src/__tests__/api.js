import createScale from '../index'

describe(`step()`, () => {
  it(`works with defaults`, () => {
    const scale = createScale()
    expect(scale.step(0)).toEqual(16)
    expect(scale.step(2)).toEqual(41.886784000000006)
  })

  describe(`base`, () => {
    it(`works with numeric value`, () => {
      const scale = createScale({ base: 10 })
      expect(scale.step(0)).toEqual(10)
    })

    it(`works with array value`, () => {
      const scale = createScale({ base: [10] })
      expect(scale.step(0)).toEqual(10)
    })

    it(`works with multiple values`, () => {
      const scale = createScale({ base: [10, 20] })
      expect(scale.step(0)).toEqual(10)
      expect(scale.step(3)).toEqual(20)
    })
  })

  describe(`ratio`, () => {
    it(`works with numeric value`, () => {
      const scale = createScale({ ratio: 2 })
      expect(scale.step(0)).toEqual(16)
      expect(scale.step(1)).toEqual(32)
    })
  })
})
