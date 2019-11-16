import { Component, h, Prop } from '@stencil/core'
import shortid from 'shortid'
import TableTunnel from '../../utils/tableTunnel'

@Component({
    tag: 'f4-table-pagination'
})
export class TablePagination {
    @Prop() page        : number
    @Prop() pages       : number
    @Prop() updatePage  : Function
    
    _handleChangePage = value => () => {
        this.updatePage(value)
    }

    _isCurrent = value => {
        return value === this.page
    }

    render () {
        return (
            <div>
                {
                    Array.from(Array(this.pages).keys()).map(value => (
                        <div
                            key={ shortid.generate() }
                            onClick={ this._handleChangePage(value) }
                            class={ this._isCurrent(value) ? 'active' : '' }
                        >
                            { value + 1 }
                        </div>
                    ))
                }
            </div>
        )
    }
}

TableTunnel.injectProps(TablePagination, ['page', 'pages', 'updatePage'])
