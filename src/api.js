import { compose, flip, curry } from 'ramda'
import modularscale from 'modularscale-js'

import { validateIsInteger } from 'folktale-validations/lib/validators/predicate/generatedPredicateValidators'
import { matchWithSuccessOrFailure } from 'folktale-validations/lib/utils/validations'
import { throwAPIError } from './errors'
import { propValue } from './utils'

const getRatio = flip(curry(modularscale))

export default config => {
  const step = compose(
    matchWithSuccessOrFailure(
      compose(getRatio(config), propValue),
      throwAPIError
    ),
    validateIsInteger
  )
  return {
    step,
  }
}
