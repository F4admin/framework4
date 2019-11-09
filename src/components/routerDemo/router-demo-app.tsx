import { Component, FunctionalComponent, h } from '@stencil/core';

const PrivateRoute: FunctionalComponent<{url: string, routeRender: Function }> = ({ url, routeRender }) => (
  <stencil-route url={url} routeRender={
    ({ history, match, pages }) => {
      if ((window as any).userAuthenticated) {
        return routeRender({ history, match, pages });
      }
      return <stencil-router-redirect url="/"></stencil-router-redirect>;
    }
  }/>
)


@Component({
  tag: 'router-demo-app'
})
export class RouterDemoApp {

  render() {
    return (
      <stencil-router title-suffix=" - Stencil Router Demos">
        <div class="hold-routes">
          <stencil-route-switch>
            <stencil-route url="/" exact={true} routeRender={() =>
              <div class="content-holder">
                <span>rendering /</span>
              </div>
            }></stencil-route>

            <stencil-route url={['/demo', '/demox']} routeRender={() =>
              <div class="content-holder">
                <stencil-route-title title="DEMO"></stencil-route-title>
                <span>rendering /demo</span>
                <li><stencil-route-link url="/demo3">Demo3 Link</stencil-route-link></li>
              </div>
            }></stencil-route>

            <stencil-route url="/demo2" routeRender={() =>
              <div class="content-holder">
                <span>rendering /demo2</span>,
                <stencil-router-redirect url="/demo3" />
              </div>
            }></stencil-route>

            <stencil-route url="/demo3" routeRender={({ history, match, pages }) =>
              <div class="content-holder">
                <test-demo-three {...{history, match, pages}}></test-demo-three>
              </div>
            }></stencil-route>

            <stencil-route url="/demo4" routeRender={({ history, match, pages }) =>
              <div class="content-holder">
                <test-demo-four {...{history, match, pages}}></test-demo-four>
              </div>
            }></stencil-route>

            <stencil-route url="/demo5" routeRender={(props) =>
              <div class="content-holder">
                <async-content {...props} location="/"></async-content>
              </div>
            }></stencil-route>

            <stencil-route url="/demo6" routeRender={({ history, match, pages }) =>
              <div class="content-holder">
                <test-demo-six {...{history, match, pages}}></test-demo-six>
              </div>
            }></stencil-route>

            <PrivateRoute url="/demo7" routeRender={(props: any) =>
              <div class="content-holder">
                <test-demo-six {...props}></test-demo-six>
              </div>
            }></PrivateRoute>

            <stencil-route url="/demo8" routeRender={() =>
              <div class="content-holder">
                <test-demo-eight></test-demo-eight>
              </div>
            }></stencil-route>

            <stencil-route url="/demo9" routeRender={() =>
              <div class="content-holder">
                <stencil-route-title pageTitle="Demo 9"></stencil-route-title>
                <span>rendering /demo 9</span>
              </div>
            }></stencil-route>

            <stencil-route url="/route-guard" routeRender={({ history, match, pages }) =>
              <div class="content-holder">
                <test-route-guard {...{history, match, pages}}></test-route-guard>
              </div>
            }></stencil-route>

            <stencil-route routeRender={() =>
              <div class="content-holder">
                <span>The route is not found</span>
              </div>
            }></stencil-route>

          </stencil-route-switch>
        </div>
      </stencil-router>
    );
  }
}