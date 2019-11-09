import AWSAppSyncClient from 'aws-appsync'
import { AUTH_TYPE } from 'aws-appsync-auth-link'

const client = new AWSAppSyncClient({
    url     : 'https://metaphysics-production.artsy.ne',
    region  : '',
    auth    : {
        type: AUTH_TYPE.NONE
    }
})

export default client
