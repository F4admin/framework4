import { Config } from "@stencil/core"

export const config: Config = {
	namespace: "framework4",
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
		{
			type: "docs-readme",
			dir: "docs",
		},
		{
			type: "www",
			serviceWorker: null, // disable service workers
		},
	],
}
