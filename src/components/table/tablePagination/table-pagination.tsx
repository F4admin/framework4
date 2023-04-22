import { Component, h, Prop } from "@stencil/core"
import shortid from "shortid"
import tableStore from "../../../utils/tableStore"

@Component({
	tag: "f4-table-pagination",
    styleUrl: "./table-pagination.scss",
    shadow: true,
})
export class TablePagination {
	@Prop() page: number
	@Prop() pages: number
	@Prop() updatePage: Function

	_handleChangePage = (value) => () => {
		tableStore.updatePage(value)
	}

	_isCurrent = (value) => {
		return value === tableStore.page
	}

	render() {
		return (
			<div id="paginationWrapper">
                <div>Previous</div>
				{Array.from(Array(tableStore.pages).keys()).map((value) => (
					<div
						key={shortid.generate()}
						onClick={this._handleChangePage(value)}
						class={this._isCurrent(value) ? "active" : ""}
					>
						{value + 1}
					</div>
				))}
                <div>Next</div>
			</div>
		)
	}
}
