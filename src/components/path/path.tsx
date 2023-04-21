import { Component, Prop, Element, h, Host } from "@stencil/core"
import moduleState, { Route } from '../../utils/moduleStore'

@Component({
	tag: "f4-path",
})
export class Path {
	@Prop() routes: Route
	@Prop() addRoute: Function
	@Prop() path: string
	@Prop() moduleName: string
	@Prop() exact?: boolean
	@Element() el: HTMLElement

	componentWillLoad() {
        moduleState.addRoute({
            path: this.path,
            title: this.moduleName,
            component: this.el.children,
            exact: this.exact,
        })
		// console.log(this.routes)
		// console.log(this.el.children)
	}

	// componentDidLoad() {
	//     console.log(this.routes)
	// }

	render() {
		return <Host />
	}
}
