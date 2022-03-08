import type { NextApiHandler } from 'next'
import { createNextApiHandler } from '../../common/api/apiHandler'

const do_GET: NextApiHandler = async (req, res) => {
  res.json({ hello: 'world' })
}

const handler = createNextApiHandler().get(do_GET)

export default handler
