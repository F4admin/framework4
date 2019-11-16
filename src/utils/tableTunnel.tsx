import { h } from '@stencil/core'
import { createProviderConsumer } from '@stencil/state-tunnel'

export interface Column {
    header      : string,
    accessor    : string
}

export interface State {
    columns     : Array<Column>,
    addColumn   : Object
}

export default createProviderConsumer<State>(
    {
        columns     : [],
        addColumn   : () => {}
    },
    (subscribe, child) => (
        <context-subscriber subscribe={ subscribe } render={ child }/>
    )
)
