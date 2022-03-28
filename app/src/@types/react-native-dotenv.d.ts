declare module 'react-native-dotenv' {
  export const ENV: 'development' | 'test' | 'production'
  export const DEV_API_ENDPOINT: string
  export const TST_API_ENDPOINT: string
  export const PRD_API_ENDPOINT: string
  export const FIREBASE_API_KEY: string
  export const FIREBASE_APP_ID: string
  export const FIREBASE_AUTH_DOMAIN: string
  export const FIREBASE_DATABASE_URL: string
  export const FIREBASE_MESSAGING_SENDER_ID: string
  export const FIREBASE_PROJECT_ID: string
  export const FIREBASE_STORAGE_BUCKET: string
}
