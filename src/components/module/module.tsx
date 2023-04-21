import { Component, State, h, Watch, Prop } from "@stencil/core"
import apolloClient, { ApolloClient } from "../../utils/apollo"
import GraphqlOrmCreate from "../../utils/graphqlORM"
import moduleState, { Route } from '../../utils/moduleStore'

@Component({
	tag: "f4-module",
	shadow: true,
})
export class Module {
	@Prop() endpoint: string = ""

	@State() routes: Route[] = []
	@State() client: ApolloClient<any>
	@State() graphqlApi: any = {}

	async componentWillLoad() {
		this.client = apolloClient({ url: this.endpoint })
		this.graphqlApi = await GraphqlOrmCreate(this.client)
	}

	addRoute = (route: Route) => {
		this.routes = [...this.routes, route]
	}

	@Watch("routes")
	generateRoutes() {
		return (
			<stencil-route-switch>
				{this.routes.map((value) => (
					<stencil-route
						url={value.path}
						routeRender={() =>
							Array.from(value.component).map((child) => {
								// console.log(JSON.stringify(child))
								// return <div>{ JSON.stringify(child) }</div>
								return <div innerHTML={child.outerHTML} />
							})
						}
						exact={!!value.exact}
					></stencil-route>
				))}
			</stencil-route-switch>
		)
	}

	render() {        
        moduleState.routes = this.routes
        moduleState.addRoute = this.addRoute
        moduleState.client = this.client
        moduleState.graphqlApi = this.graphqlApi
        
		return (
			<div>
				<div>
					<stencil-router>{this.generateRoutes()}</stencil-router>
				</div>
				<div>{/* <slot /> */}</div>
			</div>
		)
	}
}
