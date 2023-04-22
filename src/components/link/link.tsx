import { Component, h, Prop } from "@stencil/core"
import { href } from 'stencil-router-v2'

@Component({
	tag: "f4-link",
    shadow: true,
})
export class Link {

    @Prop() url: string = ""

    render () {
        return (
            <div>
                <a {...href(this.url)}>
                    <slot />
                </a>
            </div>
        )
    }
}