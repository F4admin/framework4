import { createStore } from "@stencil/store"

export interface Validator {
    validator   : Function,
    error?      : string
}

export interface FormInput {
	name: string
	type: string
	validator: Validator
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
