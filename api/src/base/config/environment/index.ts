import dev from './dev'
import prd from './prd'
import tst from './tst'

const ENV = process.env.ENV

export const env = ENV === 'production' ? prd : ENV === 'test' ? tst : dev
