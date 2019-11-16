import { Component, State, h, Watch, Prop } from '@stencil/core'
import ModuleTunnel, { Route, State as ModuleState } from '../../utils/moduleTunnel'
import apolloClient, { ApolloClient } from '../../utils/apollo'
import GraphqlOrmCreate from '../../utils/graphqlORM'

@Component({
    tag     : 'f4-module',
    shadow  : true
})
export class Module {
    @Prop() endpoint: string = ''

    @State() routes: Route[] = []
    @State() client: ApolloClient
    @State() graphqlApi: any = {}

    async componentWillLoad() {
        this.client = apolloClient({ url: this.endpoint})
        this.graphqlApi = await GraphqlOrmCreate(this.client)
        console.log('module loaded', this.graphqlApi.countries)
    }

    addRoute = (route: Route) => {
        this.routes = [...this.routes, route]
    }

    @Watch('routes')
    generateRoutes () {
        return (
            <stencil-route-switch>
                {
                    this.routes.map(value => (
                        <stencil-route 
                            url={ value.path }
                            routeRender={() =>
                                Array.from(value.component)
                                .map(child => {
                                    // console.log(JSON.stringify(child))
                                    // return <div>{ JSON.stringify(child) }</div>
                                    return <div innerHTML={child.outerHTML} />
                                })
                            }
                            exact={ !!value.exact }
                        ></stencil-route>
                    ))
                }
            </stencil-route-switch>
        )
    }

    render () {
        const moduleState: ModuleState = {
            routes      : this.routes,
            addRoute    : this.addRoute,
            client      : this.client,
            graphqlApi  : this.graphqlApi
        }
        return (
            <ModuleTunnel.Provider state={ moduleState }>
                <div>
                    <stencil-router>
                        {
                            this.generateRoutes()
                        }
                    </stencil-router>
                </div>
                <div>
                    {/* <slot /> */}
                </div>
            </ModuleTunnel.Provider>
        )
    }
}