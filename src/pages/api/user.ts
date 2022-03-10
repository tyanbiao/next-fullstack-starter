import { createNextApiHandler } from '../../common/api/apiHandler'
import { CreateUserDTO } from '../../services/user'
import * as userService from '../../services/user'
import { NextApiHandler } from 'next'
import Joi from 'joi'
import validate from '../../common/middlewares/validate'
import { resolveRestfulJson } from '../../common/api/restful'

const postSchema = Joi.object({
  uid: Joi.string().guid({ separator: '-' }),
  role_id: Joi.number().required(),
  name: Joi.string(),
  username: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  is_active: Joi.boolean(),
  is_initialized: Joi.boolean(),
  created_at: Joi.date().iso(),
})

const do_POST: NextApiHandler = async (req, res) => {
  const dto = req.body as CreateUserDTO
  const user = await userService.createUser(dto)
  res.json(resolveRestfulJson(user))
}

const do_GET: NextApiHandler = async (req, res) => {
  const users = await userService.listUsers()
  res.json(resolveRestfulJson(users))
}

const handler = createNextApiHandler()
  .post(validate({ body: postSchema }), do_POST)
  .get(do_GET)

export default handler
