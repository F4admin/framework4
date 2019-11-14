// import AWSAppSyncClient from 'aws-appsync'
// import { AUTH_TYPE } from 'aws-appsync-auth-link'

// export declare type  ApolloClient =  AWSAppSyncClient<any>

// const client = ({ url }) => {
//     return new AWSAppSyncClient({
//         url,
//         region  : '',
//         auth    : {
//             type: AUTH_TYPE.NONE
//         }
//     })
// }

import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export declare type ApolloClient = ApolloClient<any>

const client = ({ url }) => {
    const cache = new InMemoryCache({
        dataIdFromObject: obj => obj.id || null
    })
    
    const httpLink = new HttpLink({ uri: url })

    const link = ApolloLink.from([
        httpLink
    ].filter(Boolean))
    
    return new ApolloClient({
        link,
        cache,
        connectToDevTools: process.env.NODE_ENV !== 'production'
    })
}

export default client
