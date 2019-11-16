import { createMutationObjectFromSchema, createMutationObject } from './orm-factory'
import { createQueryResolver, createMutationResolver } from './default-query-resolver'

async function createWithResolver (queryResolver, mutationResolver) {
    return createMutationObject(queryResolver, mutationResolver)
}

async function createWithHeaders (endpoint, headers, client) {
    return createWithResolver(
        createQueryResolver(endpoint, headers, client),
        createMutationResolver(endpoint, headers, client)
    )
}

async function create (client) {
    return createWithResolver(
        createQueryResolver('', '', client),
        createMutationResolver('', '', client)
    )
}

function createWithResolverAndSchema (queryResolver, schema) {
    return createMutationObjectFromSchema(queryResolver, schema)
}

function createWithSchemaAndHeaders (endpoint, schema, headers) {
    return createWithResolverAndSchema(createQueryResolver(endpoint, headers), schema)
}

function createWithSchema (endpoint, schema, auth) {
    return createWithSchemaAndHeaders(endpoint, schema, auth ? { Authorization: `BMToken ${auth}` } : { })
}

create.withHeaders = createWithHeaders
create.withResolver = createWithResolver
create.withSchema = createWithSchema
create.withSchemaAndHeaders = createWithSchemaAndHeaders
create.withResolverAndSchema = createWithResolverAndSchema
create.getDefaultQueryResolver = createQueryResolver

export default create
