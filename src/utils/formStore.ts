import { createStore } from "@stencil/store"

export interface FormInput {
	name: string
	type: string
	validator: Function
}

export interface State {
	inputs: FormInput[]
	registerInput: Function
}

const { state } = createStore<State>({
    inputs: [],
    registerInput: () => {},
})

export default state
