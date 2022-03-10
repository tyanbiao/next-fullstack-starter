import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import cors from 'cors'
import * as Boom from '@hapi/boom'
import config from '../../config'
import { rejectRestfulJson } from './restful'

export function createNextApiHandler() {
  return nc<NextApiRequest, NextApiResponse>({
    onError(err: any, req, res) {
      if (Boom.isBoom(err)) {
        res.status(err.output.payload.statusCode)
        res.json(
          rejectRestfulJson(
            err.output.payload.statusCode,
            err.output.payload.message,
          ),
        )
      } else {
        res.status(500)
        res.json(rejectRestfulJson(500, 'Unexpected Error'))
        console.error(err)
      }
    },
    onNoMatch(_req, _res) {
      throw Boom.methodNotAllowed('Method not allowed')
    },
  }).use(cors(config.corsOptions))
}
