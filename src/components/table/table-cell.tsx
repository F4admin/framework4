import { Component, h, Prop, Host } from '@stencil/core'
import TableTunnel, { Column } from '../../utils/tableTunnel'

@Component({
    tag: 'f4-table-cell'
})
export class TableCell {
    @Prop() header      : string
    @Prop() accessor    : string
    @Prop() columns     : Array<Column>
    @Prop() addColumn   : Function
    @Prop() search?     : boolean

    componentWillLoad () {
        this.addColumn({
            header      : this.header,
            accessor    : this.accessor,
            search      : !!this.search
        })
    }

    render () {
        return (
            <Host />
        )
    }
}

TableTunnel.injectProps(TableCell, ['columns', 'addColumn'])