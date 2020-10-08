/// <reference types="fancybox" />
/// <reference types="jquery" />
import "@fancyapps/fancybox";
import { Translations } from "@modstrap/lexicon";
interface FancyGroupItem extends Omit<FancyBoxGroupItem, 'src'> {
    src: string | JQuery<HTMLElement>;
}
declare type FancyItems = string | JQuery<HTMLElement> | FancyGroupItem | FancyGroupItem[];
/**
 * Adaptation for jQuery.FancyBox.
 *
 * @see setup
 * @see translations
 * @see open
 * @see close
 * @see destroy
 * @see getInstance
 */
declare class Fancy {
    /**
     * Reconfiguration prevention indicator.
     *
     * @private
     */
    private static initiated;
    /**
     *  Default translations.
     */
    static translations: Translations;
    /**
     * Performs translation.
     */
    static translate(): void;
    /**
     *  Setting up.
     */
    static setup(): void;
    /**
     * Wrapper for JQuery.FancyBox.open.
     * Starts new FancyBox instance.
     *
     * @param items Group items.
     */
    static open(items: FancyItems): FancyBoxInstance;
    /**
     * Wrapper for JQuery.FancyBox.open.
     * Starts new FancyBox instance.
     *
     * @param items Group items.
     * @param options FancyBox options.
     */
    static open(items: FancyItems, options: FancyBoxOptions): FancyBoxInstance;
    /**
     * Wrapper for JQuery.FancyBox.open.
     * Starts new FancyBox instance.
     *
     * @param items Group items.
     * @param index The index of the item in the group.
     */
    static open(items: FancyItems, index: number): FancyBoxInstance;
    /**
     * Wrapper for JQuery.FancyBox.open.
     * Starts new FancyBox instance.
     *
     * @param items Group items.
     * @param options FancyBox options.
     * @param index The index of the item in the group.
     */
    static open(items: FancyItems, options: FancyBoxOptions, index: number): FancyBoxInstance;
    /**
     * Wrapper for JQuery.FancyBox.close.
     * Close instance.
     *
     * @param all Close all instances?
     */
    static close(all?: boolean): void;
    /**
     * Wrapper for JQuery.FancyBox.destroy.
     * Close all instances and unbind all events.
     */
    static destroy(): void;
    /**
     * Wrapper for JQuery.FancyBox.getInstance.
     * Get reference to currently active FancyBox instance.
     *
     * @param command Command for the current instance.
     */
    static getInstance(command?: string | (() => void)): FancyBoxInstance;
}
export default Fancy;
export { FancyGroupItem, };
