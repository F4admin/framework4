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

    _handleNextPage = () => {
        if (tableStore.page >= tableStore.pages - 1) {
            return
        }
        tableStore.updatePage(tableStore.page + 1)
    }

    _handlePreviousPage = () => {
        if (tableStore.page === 0) {
            return
        }
        tableStore.updatePage(tableStore.page - 1)
    }

	_isCurrent = (value) => {
		return value === tableStore.page
	}

	render() {

        const first = tableStore.page !== 0
        const last = tableStore.page !== tableStore.pages - 1

		return (
			<div id="paginationWrapper">
                <div
                    class={first ? "" : "disabled"}
                    onClick={this._handlePreviousPage}
                >
                    Previous
                </div>
				{Array.from(Array(tableStore.pages).keys()).map((value) => (
					<div
						key={shortid.generate()}
						onClick={this._handleChangePage(value)}
						class={this._isCurrent(value) ? "active" : ""}
					>
						{value + 1}
					</div>
				))}
                <div
                    class={last ? "" : "disabled"}
                    onClick={this._handleNextPage}
                >
                    Next
                </div>
			</div>
		)
	}
}
