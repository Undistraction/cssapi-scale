import {
  validateIsValidNumber,
  validateIsPlainObject,
  validateIsArrayOf,
} from 'folktale-validations'
import { ensureArray } from 'ramda-adjunct'
import orValidator from 'folktale-validations/lib/helpers/orValidator'
import SCALE from './const/scale'

export const CONFIG = {
  fields: [
    {
      name: `base`,
      validator: orValidator(
        validateIsArrayOf(validateIsValidNumber),
        validateIsValidNumber
      ),
      transformer: ensureArray,
      defaultValue: 16,
    },
    {
      name: `ratio`,
      validator: validateIsValidNumber,
      defaultValue: SCALE.GOLDEN_SECTION,
    },
  ],
}

export const CONFIG_ARGS = {
  fields: [
    {
      name: `config`,
      validator: validateIsPlainObject,
      defaultValue: {},
      value: CONFIG,
    },
  ],
}
