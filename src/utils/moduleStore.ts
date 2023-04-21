import { createStore } from "@stencil/store"
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

const { state } = createStore<State>({
	routes: [],
    addRoute: () => {},
    graphqlApi: {},
})

export default state
