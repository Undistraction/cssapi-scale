import { toThrowMultiline, toEqualMultiline } from 'jasmine-multiline-matchers'

expect.extend({
  toEqualMultiline,
  toThrowMultiline,
})
