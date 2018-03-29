import { join, prop, pickBy } from 'ramda'
import { isNotUndefined } from 'ramda-adjunct'

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

export const propValue = prop(`value`)

// -----------------------------------------------------------------------------
// Object
// -----------------------------------------------------------------------------

export const pickIsNotUndefined = pickBy(isNotUndefined)

// -----------------------------------------------------------------------------
// String
// -----------------------------------------------------------------------------

export const quote = value => `'${value}'`

export const joinWithComma = join(`, `)
export const joinWithColon = join(`: `)
export const joinWithSpace = join(` `)
