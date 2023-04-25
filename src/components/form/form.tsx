import { Component, h, State } from "@stencil/core"
import formStore, { FormInput } from '../../utils/formStore'

@Component({
	tag: "f4-form",
    shadow: true,
})
export class Form {
	@State() inputs: FormInput[] = []

	registerInput = (input: FormInput) => {
		this.inputs = [...this.inputs, input]
	}

	_handleSubmit = () => {
        console.log('submit')
    }

	render() {
        formStore.inputs = this.inputs
        formStore.registerInput = this.registerInput

		return (
			<div>
				<form onSubmit={this._handleSubmit}>
					<slot />
				</form>
			</div>
		)
	}
}
