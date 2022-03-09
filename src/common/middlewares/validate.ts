import { badRequest } from '@hapi/boom'
import withJoi from 'next-joi'

const validate = withJoi({
  onValidationError: (_req, _res) => {
    throw badRequest('Validation error')
  },
})

export default validate
