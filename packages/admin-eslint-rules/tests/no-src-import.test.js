import { RuleTester } from "eslint";
import { describe, it } from "vitest";
import rule from "../no-src-import";

describe("no-src-import", () => {
	const ruleTester = new RuleTester({
		languageOptions: { ecmaVersion: 2015, sourceType: "module" },
	});

	it("should be a valid import", () => {
		ruleTester.run("no-src-import", rule, {
			valid: [{ code: `import foo from 'src/foo'` }],
			invalid: [],
		});
	});

	it("should be an invalid import", () => {
		ruleTester.run("no-src-import", rule, {
			valid: [],
			invalid: [
				{
					code: `import foo from '@administration/src/foo'`,
					errors: [
						{
							message:
								'You can\'t use imports directly from the HeyFrame Core via "@administration/src/foo". Use the global HeyFrame object directly instead (https://developer.heyframe.com/docs/guides/plugins/plugins/administration/the-heyframe-object)',
						},
					],
				},
			],
		});
	});
});
