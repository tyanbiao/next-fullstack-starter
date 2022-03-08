import {
  develop as corsOptionsDev,
  producation as corsOptionsPro,
} from './cors'

const __DEV__ = process.env.NODE_ENV === 'development'

const config = {
  corsOptions: __DEV__ ? corsOptionsDev : corsOptionsPro,
}

export default config
