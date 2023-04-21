import { Component, h, Prop, State } from "@stencil/core"
import FormTunnel, { FormInput } from "../../utils/formTunnel"

// interface Validator {
//     validator   : Function,
//     error       : string
// }

// interface CommonValidators {
//     number: Validator
// }

// const commonValidators: CommonValidators = {
//     number: {
//         validator: value => {
//             return !isNaN(parseFloat(value))
//         },
//         error: 'El valor ingresado no es un número válido'
//     }
// }

// commonValidators['number'] = {
//     validator: value => {
//         return !isNaN(parseFloat(value))
//     },
//     error: 'El valor ingresado no es un número válido'
// }

@Component({
	tag: "f4-form-input",
})
export class Input {
	@Prop() name: string
	@Prop() type: string = "text"
	@Prop() inputs: FormInput[]
	@Prop() registerInput: Function
	@Prop() customValidator: Function
	@State() value: string
	@State() currentInput: FormInput

	componentWillLoad() {
		this.currentInput = {
			name: this.name,
			type: this.type,
			validator: this.customValidator
				? this.customValidator
				: () => {
						return true
				  },
		}
		this.registerInput(this.currentInput)
	}

	_handleChange = (event) => {
		this.value = event.target.value
	}

	render() {
		return (
			<input
				name={this.name}
				value={this.value}
				type={this.type}
				onChange={this._handleChange}
			/>
		)
	}
}

FormTunnel.injectProps(Input, ["inputs", "registerInput"])
