import { Component, h, Prop, State } from "@stencil/core"
import tableStore, { Column } from "../../utils/tableStore"

@Component({
	tag: "f4-table-search",
})
export class TableSearch {
	@Prop() where: any
	@Prop() columns: Column[]
	@Prop() editWhere: Function
	@State() value: string

	_handleChange = (event) => {
		this.value = event.target.value
		this._generateWhereSearch(this.value)
	}

	_generateWhereSearch = (search) => {
		const queryWhere = tableStore.columns.reduce((accum, value) => {
			if (value.search) {
				accum[`${value.accessor}_contains`] = search
			}
			return accum
		}, {})
		tableStore.editWhere(queryWhere)
		console.log(queryWhere)
	}

	render() {
		return <input value={this.value} onInput={this._handleChange}></input>
	}
}
