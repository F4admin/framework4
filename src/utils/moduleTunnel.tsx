import { h } from "@stencil/core"
import { createProviderConsumer } from "@stencil/state-tunnel"
import { ApolloClient } from "./apollo"

export interface Route {
	route: string
	title: string
	path: string
	component: HTMLCollection
	exact: boolean
}

export interface State {
	routes: Array<Route>
	addRoute: Function
	client?: ApolloClient<any>
	graphqlApi: any
}

export default createProviderConsumer<State>(
	{
		routes: [],
		addRoute: () => {},
		graphqlApi: {},
	},
	(subscribe, child) => (
		<context-subscriber subscribe={subscribe} render={child} />
	)
)
