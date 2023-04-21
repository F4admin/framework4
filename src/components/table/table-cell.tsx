import { Component, h, Prop, Host } from "@stencil/core"
import tableStore, { Column } from "../../utils/tableStore"

@Component({
	tag: "f4-table-cell",
})
export class TableCell {
	@Prop() header: string
	@Prop() accessor: string
	@Prop() columns: Array<Column>
	@Prop() addColumn: Function
	@Prop() search?: boolean

	componentWillLoad() {
        tableStore.addColumn({
            header: this.header,
            accessor: this.accessor,
            search: !!this.search,
        })
	}

	render() {
		return <Host />
	}
}
