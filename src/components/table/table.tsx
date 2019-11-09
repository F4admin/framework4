import { Component, h } from '@stencil/core'

@Component({
    tag     : 'f4-table',
    shadow  : true
})
export class Table {
    render () {
        return (
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                </table>
        )
    }
}
