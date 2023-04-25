import { Component, h, State } from "@stencil/core"
import formStore, { FormInput } from '../../utils/formStore'

@Component({
	tag: "f4-form",
    shadow: true,
    styleUrl: './form.scss'
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
			<div id="formWrapper">
                <div id="formInner">
                    <form onSubmit={this._handleSubmit}>
                        <slot />
                        <div id="formSubmit">
                            Submit
                        </div>
                    </form>
                </div>
			</div>
		)
	}
}
