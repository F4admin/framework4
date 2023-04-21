import { createStore } from "@stencil/store"

export interface Column {
	header: string
	accessor: string
	search?: boolean
}

export interface State {
	columns: Array<Column>
	addColumn: Function
	where: any
	editWhere: Function
	pages: number
	page: number
	updatePage: Function
}

const { state } = createStore<State>({
    columns: [],
    addColumn: () => {},
    where: {},
    editWhere: () => {},
    pages: 0,
    page: 0,
    updatePage: () => {},
})

export default state
