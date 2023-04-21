import { h } from "@stencil/core"
import { createProviderConsumer } from "@stencil/state-tunnel"

export interface FormInput {
	name: string
	type: string
	validator: Function
}

export interface State {
	inputs: FormInput[]
	registerInput: Function
}

export default createProviderConsumer<State>(
	{
		inputs: [],
		registerInput: () => {},
	},
	(subscribe, child) => (
		<context-subscriber subscribe={subscribe} render={child} />
	)
)
