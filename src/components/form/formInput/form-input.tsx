import { Component, h, Prop, State } from "@stencil/core"
import formStore, { FormInput, Validator } from "../../../utils/formStore"

interface CommonValidators {
    [key: string]: Validator
}

const commonValidators: CommonValidators = {
    number: {
        validator: value => {
            return !isNaN(parseFloat(value))
        },
        error: 'El valor ingresado no es un número válido'
    }
}

const getValidator = (type: string) => {
    if (commonValidators[type] === undefined) {
        return {
            validator: () => true
        }
    }
    return commonValidators[type]
}

const getType = (type: string) => {
    switch (type) {
        case 'text':
            return 'text'
        default:
            return 'text'
    }
}

@Component({
	tag: "f4-form-input",
    shadow: true,
    styleUrl: './form-input.scss'
})
export class Input {
	@Prop() name: string
	@Prop() type: string = "text"
    @Prop() label: string
    @Prop() placeholder: string
	@Prop() customValidator: Validator
	@State() value: string
	@State() currentInput: FormInput

	componentWillLoad() {
		this.currentInput = {
			name: this.name,
			type: this.type,
			validator: this.customValidator
				? this.customValidator
				: getValidator(this.type)
		}
		formStore.registerInput(this.currentInput)
	}

	_handleChange = (event) => {
		this.value = event.target.value
	}

	render() {
		return (
            <div  id="formInputWrapper">
                <label>
                    {
                        this.label
                    }
                </label>
                <input
                    name={this.name}
                    type={getType(this.type)}
                    onChange={this._handleChange}
                    value={this.value}
                    placeholder={this.placeholder}
                />
            </div>
			
		)
	}
}

