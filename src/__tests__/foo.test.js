const foo = require('../foo')

describe('foo', () => {
  it('should return "hello"', () => {
    expect(foo()).toBe('hello')
  })
})
