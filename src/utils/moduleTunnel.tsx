import { h } from '@stencil/core'
import { createProviderConsumer } from '@stencil/state-tunnel'

export interface Route {
    route       : string,
    title       : string,
    path        : string,
    component   : HTMLCollection
    exact       : boolean
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
