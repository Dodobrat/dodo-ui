import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import summary from "rollup-plugin-summary";
import { visualizer } from "rollup-plugin-visualizer";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
				name: "dodo-ui",
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			external(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
			terser(),
			summary({
				warnLow: 10485760,
				warnHigh: 20971520,
				totalLow: 3145728,
				totalHigh: 5242880,
				showBrotliSize: false,
				showMinifiedSize: false,
			}),
			visualizer({
				title: "@dodobrat/dodo-ui",
				gzipSize: true,
			}),
		],
	},
	{
		input: "dist/esm/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
	},
];
