import { h } from '@stencil/core'
import { createProviderConsumer } from '@stencil/state-tunnel'

export interface Column {
    header      : string,
    accessor    : string,
    search?     : boolean
}

export interface State {
    columns     : Array<Column>,
    addColumn   : Object,
    where       : any,
    editWhere   : Function
}

export default createProviderConsumer<State>(
    {
        columns     : [],
        addColumn   : () => {},
        where       : {},
        editWhere   : () => {}
    },
    (subscribe, child) => (
        <context-subscriber subscribe={ subscribe } render={ child }/>
    )
)
