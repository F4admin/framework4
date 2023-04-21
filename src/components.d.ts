/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FormInput } from "./utils/formStore";
import { Route } from "./utils/moduleStore";
import { Column } from "./utils/tableStore";
export { FormInput } from "./utils/formStore";
export { Route } from "./utils/moduleStore";
export { Column } from "./utils/tableStore";
export namespace Components {
    interface F4Form {
    }
    interface F4FormInput {
        "customValidator": Function;
        "inputs": FormInput[];
        "name": string;
        "registerInput": Function;
        "type": string;
    }
    interface F4Module {
        "endpoint": string;
    }
    interface F4Path {
        "addRoute": Function;
        "exact"?: boolean;
        "moduleName": string;
        "path": string;
        "routes": Route;
    }
    interface F4Table {
        "graphqlApi": any;
        "pageSize": number;
        "query": string;
        "queryConnection": string;
    }
    interface F4TableCell {
        "accessor": string;
        "addColumn": Function;
        "columns": Array<Column>;
        "header": string;
        "search"?: boolean;
    }
    interface F4TablePagination {
        "page": number;
        "pages": number;
        "updatePage": Function;
    }
    interface F4TableSearch {
        "columns": Column[];
        "editWhere": Function;
        "where": any;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLF4FormElement extends Components.F4Form, HTMLStencilElement {
    }
    var HTMLF4FormElement: {
        prototype: HTMLF4FormElement;
        new (): HTMLF4FormElement;
    };
    interface HTMLF4FormInputElement extends Components.F4FormInput, HTMLStencilElement {
    }
    var HTMLF4FormInputElement: {
        prototype: HTMLF4FormInputElement;
        new (): HTMLF4FormInputElement;
    };
    interface HTMLF4ModuleElement extends Components.F4Module, HTMLStencilElement {
    }
    var HTMLF4ModuleElement: {
        prototype: HTMLF4ModuleElement;
        new (): HTMLF4ModuleElement;
    };
    interface HTMLF4PathElement extends Components.F4Path, HTMLStencilElement {
    }
    var HTMLF4PathElement: {
        prototype: HTMLF4PathElement;
        new (): HTMLF4PathElement;
    };
    interface HTMLF4TableElement extends Components.F4Table, HTMLStencilElement {
    }
    var HTMLF4TableElement: {
        prototype: HTMLF4TableElement;
        new (): HTMLF4TableElement;
    };
    interface HTMLF4TableCellElement extends Components.F4TableCell, HTMLStencilElement {
    }
    var HTMLF4TableCellElement: {
        prototype: HTMLF4TableCellElement;
        new (): HTMLF4TableCellElement;
    };
    interface HTMLF4TablePaginationElement extends Components.F4TablePagination, HTMLStencilElement {
    }
    var HTMLF4TablePaginationElement: {
        prototype: HTMLF4TablePaginationElement;
        new (): HTMLF4TablePaginationElement;
    };
    interface HTMLF4TableSearchElement extends Components.F4TableSearch, HTMLStencilElement {
    }
    var HTMLF4TableSearchElement: {
        prototype: HTMLF4TableSearchElement;
        new (): HTMLF4TableSearchElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "f4-form": HTMLF4FormElement;
        "f4-form-input": HTMLF4FormInputElement;
        "f4-module": HTMLF4ModuleElement;
        "f4-path": HTMLF4PathElement;
        "f4-table": HTMLF4TableElement;
        "f4-table-cell": HTMLF4TableCellElement;
        "f4-table-pagination": HTMLF4TablePaginationElement;
        "f4-table-search": HTMLF4TableSearchElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface F4Form {
    }
    interface F4FormInput {
        "customValidator"?: Function;
        "inputs"?: FormInput[];
        "name"?: string;
        "registerInput"?: Function;
        "type"?: string;
    }
    interface F4Module {
        "endpoint"?: string;
    }
    interface F4Path {
        "addRoute"?: Function;
        "exact"?: boolean;
        "moduleName"?: string;
        "path"?: string;
        "routes"?: Route;
    }
    interface F4Table {
        "graphqlApi"?: any;
        "pageSize"?: number;
        "query"?: string;
        "queryConnection"?: string;
    }
    interface F4TableCell {
        "accessor"?: string;
        "addColumn"?: Function;
        "columns"?: Array<Column>;
        "header"?: string;
        "search"?: boolean;
    }
    interface F4TablePagination {
        "page"?: number;
        "pages"?: number;
        "updatePage"?: Function;
    }
    interface F4TableSearch {
        "columns"?: Column[];
        "editWhere"?: Function;
        "where"?: any;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "f4-form": F4Form;
        "f4-form-input": F4FormInput;
        "f4-module": F4Module;
        "f4-path": F4Path;
        "f4-table": F4Table;
        "f4-table-cell": F4TableCell;
        "f4-table-pagination": F4TablePagination;
        "f4-table-search": F4TableSearch;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "f4-form": LocalJSX.F4Form & JSXBase.HTMLAttributes<HTMLF4FormElement>;
            "f4-form-input": LocalJSX.F4FormInput & JSXBase.HTMLAttributes<HTMLF4FormInputElement>;
            "f4-module": LocalJSX.F4Module & JSXBase.HTMLAttributes<HTMLF4ModuleElement>;
            "f4-path": LocalJSX.F4Path & JSXBase.HTMLAttributes<HTMLF4PathElement>;
            "f4-table": LocalJSX.F4Table & JSXBase.HTMLAttributes<HTMLF4TableElement>;
            "f4-table-cell": LocalJSX.F4TableCell & JSXBase.HTMLAttributes<HTMLF4TableCellElement>;
            "f4-table-pagination": LocalJSX.F4TablePagination & JSXBase.HTMLAttributes<HTMLF4TablePaginationElement>;
            "f4-table-search": LocalJSX.F4TableSearch & JSXBase.HTMLAttributes<HTMLF4TableSearchElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
