import { RuleTester } from "eslint";
import { describe, it } from "vitest";
import rule from "../no-sw-extension-override";

describe("no-sw-extension-override", () => {
	const ruleTester = new RuleTester({
		languageOptions: { ecmaVersion: 2015, sourceType: "module" },
	});

	it("should be a valid override", () => {
		ruleTester.run("no-sw-extension-override", rule, {
			valid: [
				{
					code: `HeyFrame.Component.override('sw-foo', {})`,
				},
				{
					code: `HeyFrame.Component.extend('sw-extension-foo', {})`,
				},
				{
					code: `const { Component } = HeyFrame; Component.extend('sw-extension-foo', {})`,
				},
				{
					code: `const Component = HeyFrame.Component; Component.extend('sw-extension-foo', {})`,
				},
			],
			invalid: [],
		});
	});

	it("should be an invalid override", () => {
		ruleTester.run("no-sw-extension-override", rule, {
			valid: [],
			invalid: [
				{
					code: `HeyFrame.Component.override('sw-extension-foo', {})`,
					errors: [
						{
							message: "Changing the HeyFrame Extension Manager is not allowed",
						},
					],
				},
				{
					code: `const { Component } = HeyFrame; Component.override('sw-extension-foo', {})`,
					errors: [
						{
							message: "Changing the HeyFrame Extension Manager is not allowed",
						},
					],
				},
				{
					code: `const Component = HeyFrame.Component; Component.override('sw-extension-foo', {})`,
					errors: [
						{
							message: "Changing the HeyFrame Extension Manager is not allowed",
						},
					],
				},
			],
		});
	});
});
