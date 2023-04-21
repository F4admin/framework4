import { Component, h, State } from "@stencil/core"
import FormTunnel, {
	FormInput,
	State as FormState,
} from "../../utils/formTunnel"

@Component({
	tag: "f4-form",
})
export class Form {
	@State() inputs: FormInput[]

	registerInput = (input: FormInput) => {
		this.inputs = [...this.inputs, input]
	}

	_handleSubmit = () => {}

	render() {
		const state: FormState = {
			inputs: this.inputs,
			registerInput: this.registerInput,
		}
		return (
			<FormTunnel.Provider state={state}>
				<form onSubmit={this._handleSubmit}>
					<slot />
				</form>
			</FormTunnel.Provider>
		)
	}
}
