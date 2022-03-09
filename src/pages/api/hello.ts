import type { NextApiHandler } from 'next'
import { createNextApiHandler } from '../../common/api/apiHandler'
import Joi from 'joi'
import validate from '../../common/middlewares/validate'

const schema = Joi.object({
  birthdate: Joi.date().iso(),
  email: Joi.string().email().required(),
  name: Joi.string().required(),
})

const do_GET: NextApiHandler = async (req, res) => {
  res.json({ hello: 'world' })
}

const do_POST: NextApiHandler = async (req, res) => {
  res.json({ hello: 'world' })
}

const handler = createNextApiHandler()
  .get(do_GET)
  .post(validate({ body: schema }), do_POST)

export default handler
