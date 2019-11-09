import { h } from '@stencil/core'
import { createProviderConsumer } from '@stencil/state-tunnel'

export interface Route {
    route       : String,
    title       : String,
    component   : HTMLCollection
    exact       : Boolean
}

export interface State {
    routes      : Array<Route>,
    addRoute    : Function
}

export default createProviderConsumer<State>({
        routes      : [],
        addRoute    : () => {}
    },
    (subscribe, child) => (
        <context-subscriber subscribe={ subscribe } render={ child }/>
    )
)
