import { Component, Prop, Element, h, Host } from "@stencil/core"
import ModuleTunnel, { Route } from "../../utils/moduleTunnel"

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
		this.addRoute({
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

ModuleTunnel.injectProps(Path, ["routes", "addRoute"])
