import type { Plugin, PluginContext } from "i18next-cli";
/**
 * Enables I18next to extract translation keys from .svelte component files.
 */
export declare class I18nextPluginSvelte implements Plugin {
    /** i18next-cli plugin name. */
    readonly name = "i18next-cli-plugin-svelte";
    private readonly generator;
    /**
     * Creates a new AST generator to process Typescript specific syntax.
     * @returns an extended astree's {@link GENERATOR} object.
     */
    private createTypescriptAstGenerator;
    /**
     * Extracts JS code from Svelte component `<script>` or `<script module>`,
     * Svelte templates and attribute value expressions.
     *
     * @param code raw source code to process
     * @param path path to the source file
     * @returns extracted JS code from .svelte component or
     *   `undefined` for non-Svelte files
     */
    onLoad(code: string, path: string): string | undefined;
    /**
     * Unwraps Svelte 5 rune wrappers (`$derived.by` and `$derived`) around
     * `useTranslation`-style hooks so the extractor can resolve the
     * `namespace` and `keyPrefix` that would otherwise be lost.
     *
     * @see https://github.com/dreamscached/i18next-cli-plugin-svelte/issues/5
     * @see https://github.com/i18next/i18next-cli/issues/231
     */
    onVisitNode(node: any, context: PluginContext): void;
}
