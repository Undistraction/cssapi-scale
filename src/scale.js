import { compose, objOf, prop } from 'ramda'
import { matchWithSuccessOrFailure } from 'folktale-validations'
import { throwConfigureError } from './errors'
import validateConfigArgs from './validations/validators/validateConfigArgs'
import api from './api'
import { propValue, pickIsNotUndefined } from './utils'
import { CONFIG_ARG_NAMES } from './const'

const { CONFIG } = CONFIG_ARG_NAMES

export default config =>
  compose(
    matchWithSuccessOrFailure(
      compose(api, prop(CONFIG), propValue),
      compose(throwConfigureError, propValue)
    ),
    validateConfigArgs,
    pickIsNotUndefined,
    objOf(CONFIG)
  )(config)
