import { ENV } from 'react-native-dotenv'

import dev from './dev'
import prd from './prd'
import tst from './tst'

export const env = ENV === 'production' ? prd : ENV === 'test' ? tst : dev
