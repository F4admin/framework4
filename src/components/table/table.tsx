import { Component, h, Prop, State, Watch } from "@stencil/core"
import moduleStore from '../../utils/moduleStore'
import tableStore, { Column } from '../../utils/tableStore'

@Component({
	tag: "f4-table",
	shadow: true,
})
export class Table {
	@Prop() query: string = ""
	@Prop() queryConnection: string = ""
	@Prop() graphqlApi: any = {}
	@Prop() pageSize: number = 10
	@State() columns: Array<Column> = []
	@State() isConnection: boolean
	@State() loading: boolean = true
	@State() data: Array<any> = []
	@State() count: number = 0
	// @State() pageSize       : number = 10
	@State() pages: number = 0
	@State() page: number = 0
	@State() sorted: Array<any> = []
	@State() filtered: Array<any> = []
	@State() where: any = {}

	componentWillLoad() {
		if (this.queryConnection !== "") {
			this.isConnection = true
		}
	}

	@Watch("columns")
	columnsUpdated() {
		this._fetchData()
	}

	@Watch("where")
	whereUpdated() {
		this._fetchData()
	}

	@Watch("page")
	pageUpdated() {
		this._fetchData()
	}

	addColumn = (column: Column) => {
		this.columns = [...this.columns, column]
	}

	editWhere = (where: any) => {
		this.where = {
			...this.where,
			where,
		}
	}

	updatePage = (page: number) => {
		this.page = page
	}

	_handleDot = (path) => {
		if (path.indexOf(".") > 0) {
			const pathSplit = path.split(/\.(.*)/)
			const trueSecondPath =
				pathSplit[1].indexOf(".") > 0
					? this._handleDot(pathSplit[1])
					: pathSplit[1]
			return `${pathSplit[0]}{
                ${trueSecondPath}
            }`
		}
		return path
	}

	_preFixColumnsForConnection = () => `
        pageInfo{
            hasNextPage
            startCursor
            hasPreviousPage
        }
        edges{
            cursor
            node{
        `

	_postFixColumnsForConnection = () => `
            }
        }
        `

	_makeGraphInfo = (columns) => {
		const { isConnection } = this
		let info = "{\n"
		if (isConnection) info += this._preFixColumnsForConnection()
		const infoArray = []
		Object.keys(columns).forEach((col) => {
			if (typeof columns[col].accessor === "string") {
				if (!infoArray[columns[col].accessor]) {
					info += `${this._handleDot(columns[col].accessor)}\n`
					infoArray.push(columns[col].accessor)
				}
			} else if (typeof columns[col].id === "string") {
				if (!infoArray[columns[col].id]) {
					info += `${this._handleDot(columns[col].id)}\n`
					infoArray.push(columns[col].id)
				}
			}
		})
		if (isConnection) info += this._postFixColumnsForConnection()
		info += "}"
		return info
	}

	_getCountConnection = async (where) => {
		// const { api, queryConnection, table } = this.props
		const { queryConnection } = this
		const info = `
        {
            aggregate{
                count
            }
        }`
		const data = await moduleStore.graphqlApi[queryConnection](where, info)
		if (data && data.aggregate && data.aggregate.count) {
			const {
				aggregate: { count },
			} = data
			const { pageSize } = this
			// this.setState({
			//     pages: _.ceil(count / pageSize)
			// })
			this.pages = Math.ceil(count / pageSize)
			// table.setCount(count)
		}
		return data
	}

	_unfoldDataConnection = (data) => {
		const { edges } = data
		const unfoldData = edges.map((value) => value.node)
		return unfoldData
	}

	_handleFetchMore = async (state) => {
		this.page = state.page
		this.pageSize = state.pageSize
		this.sorted = state.sorted
		this.filtered = state.filtered
		this._fetchData()
	}

	isEmpty(obj) {
		return Object.entries(obj).length === 0 && obj.constructor === Object
	}

	async _fetchData() {
		const {
			// search,
			queryConnection,
			query,
			columns,
			where,
		} = this
		const { isConnection, page, pageSize } = this
		this.loading = true
		// console.log(this.props)
		// console.log(sorted, filtered)
		if (!this.isEmpty(moduleStore.graphqlApi) && columns.length !== 0) {
			const info = this._makeGraphInfo(columns)
			const count = isConnection
				? await this._getCountConnection(where)
				: 0
			// const queryWhere = _.clone(where)
			const queryWhere = Object.assign({}, where)
			queryWhere.first = !queryWhere.first ? pageSize : queryWhere.first
			queryWhere.skip = page * pageSize
			const data = isConnection
				? this._unfoldDataConnection(
						await moduleStore.graphqlApi[queryConnection](queryWhere, info)
				  )
				: await moduleStore.graphqlApi[query](queryWhere, info)
			this.loading = false
			this.count = count
			this.data = data
			console.log(data)
		}
	}

	render() {
        tableStore.columns = this.columns
        tableStore.addColumn = this.addColumn
        tableStore.where = this.where
        tableStore.editWhere = this.editWhere
        tableStore.page = this.page
        tableStore.pages = this.pages
        tableStore.updatePage = this.updatePage

		return (
			<div>
				<slot name="top" />
				<table>
					<tr>
						{this.columns.map((value) => (
							<th>{value.header}</th>
						))}
					</tr>
					{this.data.map((row) => (
						<tr>
							{this.columns.map((value) => (
								<th>{row[value.accessor]}</th>
							))}
						</tr>
					))}
				</table>
				<slot name="bottom" />
			</div>
		)
	}
}
