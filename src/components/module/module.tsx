import { Component, State, h, Watch } from '@stencil/core'
import ModuleTunnel, { Route, State as ModuleState } from '../../utils/moduleTunnel'

@Component({
    tag     : 'f4-module',
    shadow  : true
})
export class Module {
    @State() routes: Route[] = []

    addRoute = (route: Route) => {
        this.routes = [...this.routes, route]
    }

    @Watch('routes')
    generateRoutes () {
        return (
            <stencil-route-switch>
                {
                    this.routes.map(value => (
                        <stencil-route 
                            url={ value.path }
                            routeRender={() =>
                                Array.from(value.component)
                                .map(child => {
                                    // console.log(JSON.stringify(child))
                                    // return <div>{ JSON.stringify(child) }</div>
                                    return <div innerHTML={child.outerHTML} />
                                })
                            }
                            exact={ value.exact }
                        ></stencil-route>
                    ))
                }
                {/* <stencil-route url="/test" routeRender={() =>
                    // value.component
                    <div class="content-holder">
                        <span>Test /</span>
                    </div>
                }></stencil-route> */}
            </stencil-route-switch>
        )
    }

    render () {
        const moduleState: ModuleState = {
            routes      : this.routes,
            addRoute    : this.addRoute
        }
        return (
            <ModuleTunnel.Provider state={ moduleState }>
                <div>
                    <stencil-router>
                        {
                            this.generateRoutes()
                        }
                    </stencil-router>
                </div>
                <div>
                    {/* <slot /> */}
                </div>
            </ModuleTunnel.Provider>
        )
    }
}