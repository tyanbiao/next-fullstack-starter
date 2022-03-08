import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import cors from 'cors'
import * as Boom from '@hapi/boom'
import config from '../../config'

export function createNextApiHandler() {
  return nc<NextApiRequest, NextApiResponse>({
    onError(err: any, req, res) {
      if (Boom.isBoom(err)) {
        res.status(err.output.payload.statusCode)
        res.json({
          error: err.output.payload.error,
          message: err.output.payload.message,
        })
      } else {
        res.status(500)
        res.json({
          message: 'Unexpected error',
        })
        console.error(err)
      }
    },
    onNoMatch(_req, _res) {
      throw Boom.methodNotAllowed('Method not allowed')
    },
  }).use(cors(config.corsOptions))
}
