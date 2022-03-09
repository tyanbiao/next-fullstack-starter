import { badRequest } from '@hapi/boom'
import withJoi from 'next-joi'

const validate = withJoi({
  onValidationError: (_req, _res, error) => {
    throw badRequest(`Validation error: ${error.message}`)
  },
})

export default validate
