import { Component, h, Prop, State } from '@stencil/core'
import TableTunnel, { Column } from '../../utils/tableTunnel'

@Component({
    tag: 'f4-table-search'
})
export class TableSearch {
    @Prop() where       : any
    @Prop() columns     : Column[]
    @Prop() editWhere   : Function
    @State() value      : string

    _handleChange = (event) => {
        this.value = event.target.value
        this._generateWhereSearch(this.value)
    }

    _generateWhereSearch = search => {
        const { columns } = this
        const queryWhere = columns.reduce((accum, value) => {
            if (value.search) {
                accum[`${value.accessor}_contains`] = search
            }
            return accum
        }, {})
        this.editWhere(queryWhere)
        console.log(queryWhere)
    }

    render () {
        return (
            <input value={ this.value } onInput={ this._handleChange } />
        )
    }
}

TableTunnel.injectProps(TableSearch, ['where', 'editWhere', 'columns'])