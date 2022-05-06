import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client/core"

const client = ({ url }) => {
    return new ApolloClient({
        uri     : url,
        cache   : new InMemoryCache()
    })
}

export default client

export {
    ApolloClient
}
