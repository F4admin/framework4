import { Component, State, h, Prop } from "@stencil/core"
import { createRouter, Route } from 'stencil-router-v2'
import apolloClient, { ApolloClient } from "../../utils/apollo"
import GraphqlOrmCreate from "../../utils/graphqlORM"
import moduleState, { Route as RouteType } from '../../utils/moduleStore'

const Router = createRouter()

@Component({
	tag: "f4-module",
	shadow: true,
})
export class Module {
	@Prop() endpoint: string = ""

	@State() routes: RouteType[] = []
	@State() client: ApolloClient<any>
	@State() graphqlApi: any = {}

	async componentWillLoad() {
		this.client = apolloClient({ url: this.endpoint })
		this.graphqlApi = await GraphqlOrmCreate(this.client)

        moduleState.client = this.client
        moduleState.graphqlApi = this.graphqlApi
        moduleState.addRoute = this.addRoute
	}

	addRoute = (route: RouteType) => {
		this.routes = [...this.routes, route]
        moduleState.routes = this.routes
	}   

	render() {        
        
		return (
			<div>
                <div>
                    <Router.Switch>
                        {moduleState.routes.map((value) => (
                            <Route
                                path={value.path}
                                render={() =>
                                    Array.from(value.component).map((child) => {
                                        // console.log(JSON.stringify(child))
                                        // return <div>{ JSON.stringify(child) }</div>
                                        return <div innerHTML={child.outerHTML} />
                                    })
                                }
                                // exact={!!value.exact}
                            ></Route>
                        ))}
                    </Router.Switch>
                </div>
				<div>{/* <slot /> */}</div>
			</div>
		)
	}
}
