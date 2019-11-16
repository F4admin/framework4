/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Route,
} from './utils/moduleTunnel';
import {
  Column,
} from './utils/tableTunnel';
import {
  LocationSegments,
  MatchResults,
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface F4Module {
    'endpoint': string;
  }
  interface F4Path {
    'addRoute': Function;
    'exact'?: boolean;
    'moduleName': string;
    'path': string;
    'routes': Route;
  }
  interface F4Table {
    'graphqlApi': any;
    'query': string;
    'queryConnection': string;
  }
  interface F4TableCell {
    'accessor': string;
    'addColumn': Function;
    'columns': Array<Column>;
    'header': string;
    'search'?: boolean;
  }
  interface F4TableSearch {
    'columns': Column[];
    'editWhere': Function;
    'where': any;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface RouterDemoApp {}
  interface TestDeepComponent {
    'history'?: RouterHistory;
    'location'?: LocationSegments;
  }
  interface TestDemoEight {}
  interface TestDemoFour {
    'history'?: RouterHistory;
    'match': MatchResults | null;
    'pages': string[];
  }
  interface TestDemoLinks {}
  interface TestDemoSeven {
    'history'?: RouterHistory;
    'match'?: MatchResults;
    'pages'?: string[];
  }
  interface TestDemoSix {
    'history'?: RouterHistory;
    'match': MatchResults | null;
    'pages'?: string[];
  }
  interface TestDemoThree {
    'history'?: RouterHistory;
    'match': MatchResults | null;
    'pages'?: string[];
  }
  interface TestRouteGuard {
    'history'?: RouterHistory;
    'match': MatchResults | null;
    'pages'?: string[];
  }
}

declare global {


  interface HTMLF4ModuleElement extends Components.F4Module, HTMLStencilElement {}
  var HTMLF4ModuleElement: {
    prototype: HTMLF4ModuleElement;
    new (): HTMLF4ModuleElement;
  };

  interface HTMLF4PathElement extends Components.F4Path, HTMLStencilElement {}
  var HTMLF4PathElement: {
    prototype: HTMLF4PathElement;
    new (): HTMLF4PathElement;
  };

  interface HTMLF4TableElement extends Components.F4Table, HTMLStencilElement {}
  var HTMLF4TableElement: {
    prototype: HTMLF4TableElement;
    new (): HTMLF4TableElement;
  };

  interface HTMLF4TableCellElement extends Components.F4TableCell, HTMLStencilElement {}
  var HTMLF4TableCellElement: {
    prototype: HTMLF4TableCellElement;
    new (): HTMLF4TableCellElement;
  };

  interface HTMLF4TableSearchElement extends Components.F4TableSearch, HTMLStencilElement {}
  var HTMLF4TableSearchElement: {
    prototype: HTMLF4TableSearchElement;
    new (): HTMLF4TableSearchElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLRouterDemoAppElement extends Components.RouterDemoApp, HTMLStencilElement {}
  var HTMLRouterDemoAppElement: {
    prototype: HTMLRouterDemoAppElement;
    new (): HTMLRouterDemoAppElement;
  };

  interface HTMLTestDeepComponentElement extends Components.TestDeepComponent, HTMLStencilElement {}
  var HTMLTestDeepComponentElement: {
    prototype: HTMLTestDeepComponentElement;
    new (): HTMLTestDeepComponentElement;
  };

  interface HTMLTestDemoEightElement extends Components.TestDemoEight, HTMLStencilElement {}
  var HTMLTestDemoEightElement: {
    prototype: HTMLTestDemoEightElement;
    new (): HTMLTestDemoEightElement;
  };

  interface HTMLTestDemoFourElement extends Components.TestDemoFour, HTMLStencilElement {}
  var HTMLTestDemoFourElement: {
    prototype: HTMLTestDemoFourElement;
    new (): HTMLTestDemoFourElement;
  };

  interface HTMLTestDemoLinksElement extends Components.TestDemoLinks, HTMLStencilElement {}
  var HTMLTestDemoLinksElement: {
    prototype: HTMLTestDemoLinksElement;
    new (): HTMLTestDemoLinksElement;
  };

  interface HTMLTestDemoSevenElement extends Components.TestDemoSeven, HTMLStencilElement {}
  var HTMLTestDemoSevenElement: {
    prototype: HTMLTestDemoSevenElement;
    new (): HTMLTestDemoSevenElement;
  };

  interface HTMLTestDemoSixElement extends Components.TestDemoSix, HTMLStencilElement {}
  var HTMLTestDemoSixElement: {
    prototype: HTMLTestDemoSixElement;
    new (): HTMLTestDemoSixElement;
  };

  interface HTMLTestDemoThreeElement extends Components.TestDemoThree, HTMLStencilElement {}
  var HTMLTestDemoThreeElement: {
    prototype: HTMLTestDemoThreeElement;
    new (): HTMLTestDemoThreeElement;
  };

  interface HTMLTestRouteGuardElement extends Components.TestRouteGuard, HTMLStencilElement {}
  var HTMLTestRouteGuardElement: {
    prototype: HTMLTestRouteGuardElement;
    new (): HTMLTestRouteGuardElement;
  };
  interface HTMLElementTagNameMap {
    'f4-module': HTMLF4ModuleElement;
    'f4-path': HTMLF4PathElement;
    'f4-table': HTMLF4TableElement;
    'f4-table-cell': HTMLF4TableCellElement;
    'f4-table-search': HTMLF4TableSearchElement;
    'my-component': HTMLMyComponentElement;
    'router-demo-app': HTMLRouterDemoAppElement;
    'test-deep-component': HTMLTestDeepComponentElement;
    'test-demo-eight': HTMLTestDemoEightElement;
    'test-demo-four': HTMLTestDemoFourElement;
    'test-demo-links': HTMLTestDemoLinksElement;
    'test-demo-seven': HTMLTestDemoSevenElement;
    'test-demo-six': HTMLTestDemoSixElement;
    'test-demo-three': HTMLTestDemoThreeElement;
    'test-route-guard': HTMLTestRouteGuardElement;
  }
}

declare namespace LocalJSX {
  interface F4Module {
    'endpoint'?: string;
  }
  interface F4Path {
    'addRoute'?: Function;
    'exact'?: boolean;
    'moduleName'?: string;
    'path'?: string;
    'routes'?: Route;
  }
  interface F4Table {
    'graphqlApi'?: any;
    'query'?: string;
    'queryConnection'?: string;
  }
  interface F4TableCell {
    'accessor'?: string;
    'addColumn'?: Function;
    'columns'?: Array<Column>;
    'header'?: string;
    'search'?: boolean;
  }
  interface F4TableSearch {
    'columns'?: Column[];
    'editWhere'?: Function;
    'where'?: any;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface RouterDemoApp {}
  interface TestDeepComponent {
    'history'?: RouterHistory;
    'location'?: LocationSegments;
  }
  interface TestDemoEight {}
  interface TestDemoFour {
    'history'?: RouterHistory;
    'match'?: MatchResults | null;
    'pages'?: string[];
  }
  interface TestDemoLinks {}
  interface TestDemoSeven {
    'history'?: RouterHistory;
    'match'?: MatchResults;
    'pages'?: string[];
  }
  interface TestDemoSix {
    'history'?: RouterHistory;
    'match'?: MatchResults | null;
    'pages'?: string[];
  }
  interface TestDemoThree {
    'history'?: RouterHistory;
    'match'?: MatchResults | null;
    'pages'?: string[];
  }
  interface TestRouteGuard {
    'history'?: RouterHistory;
    'match'?: MatchResults | null;
    'pages'?: string[];
  }

  interface IntrinsicElements {
    'f4-module': F4Module;
    'f4-path': F4Path;
    'f4-table': F4Table;
    'f4-table-cell': F4TableCell;
    'f4-table-search': F4TableSearch;
    'my-component': MyComponent;
    'router-demo-app': RouterDemoApp;
    'test-deep-component': TestDeepComponent;
    'test-demo-eight': TestDemoEight;
    'test-demo-four': TestDemoFour;
    'test-demo-links': TestDemoLinks;
    'test-demo-seven': TestDemoSeven;
    'test-demo-six': TestDemoSix;
    'test-demo-three': TestDemoThree;
    'test-route-guard': TestRouteGuard;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'f4-module': LocalJSX.F4Module & JSXBase.HTMLAttributes<HTMLF4ModuleElement>;
      'f4-path': LocalJSX.F4Path & JSXBase.HTMLAttributes<HTMLF4PathElement>;
      'f4-table': LocalJSX.F4Table & JSXBase.HTMLAttributes<HTMLF4TableElement>;
      'f4-table-cell': LocalJSX.F4TableCell & JSXBase.HTMLAttributes<HTMLF4TableCellElement>;
      'f4-table-search': LocalJSX.F4TableSearch & JSXBase.HTMLAttributes<HTMLF4TableSearchElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'router-demo-app': LocalJSX.RouterDemoApp & JSXBase.HTMLAttributes<HTMLRouterDemoAppElement>;
      'test-deep-component': LocalJSX.TestDeepComponent & JSXBase.HTMLAttributes<HTMLTestDeepComponentElement>;
      'test-demo-eight': LocalJSX.TestDemoEight & JSXBase.HTMLAttributes<HTMLTestDemoEightElement>;
      'test-demo-four': LocalJSX.TestDemoFour & JSXBase.HTMLAttributes<HTMLTestDemoFourElement>;
      'test-demo-links': LocalJSX.TestDemoLinks & JSXBase.HTMLAttributes<HTMLTestDemoLinksElement>;
      'test-demo-seven': LocalJSX.TestDemoSeven & JSXBase.HTMLAttributes<HTMLTestDemoSevenElement>;
      'test-demo-six': LocalJSX.TestDemoSix & JSXBase.HTMLAttributes<HTMLTestDemoSixElement>;
      'test-demo-three': LocalJSX.TestDemoThree & JSXBase.HTMLAttributes<HTMLTestDemoThreeElement>;
      'test-route-guard': LocalJSX.TestRouteGuard & JSXBase.HTMLAttributes<HTMLTestRouteGuardElement>;
    }
  }
}


