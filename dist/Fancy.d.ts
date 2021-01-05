/// <reference types="fancybox" />
/// <reference types="jquery" />
import { LexiconTranslations } from "@modstrap/lexicon";
import "@fancyapps/fancybox";
export interface FancyTranslations extends LexiconTranslations {
    fancy_close: {
        [locale: string]: string;
    };
    fancy_next: {
        [locale: string]: string;
    };
    fancy_prev: {
        [locale: string]: string;
    };
    fancy_error: {
        [locale: string]: string;
    };
    fancy_play_start: {
        [locale: string]: string;
    };
    fancy_play_stop: {
        [locale: string]: string;
    };
    fancy_screen: {
        [locale: string]: string;
    };
    fancy_thumbs: {
        [locale: string]: string;
    };
    fancy_download: {
        [locale: string]: string;
    };
    fancy_share: {
        [locale: string]: string;
    };
    fancy_zoom: {
        [locale: string]: string;
    };
}
export declare type FancyGroupItem = FancyBoxGroupItem;
export declare type FancyItem = string | JQuery<HTMLElement> | FancyGroupItem | FancyGroupItem[];
export declare type FancyInstance = FancyBoxInstance;
export declare type FancyOptions = FancyBoxOptions;
/**
 * Adaptation for jQuery.FancyBox.
 *
 * @see translate
 * @see open
 * @see close
 * @see destroy
 * @see getInstance
 */
export declare class Fancy {
    /**
     * Performs translation.
     */
    static translate(): void;
    /**
     * Wrapper for JQuery.FancyBox.open.
     * Creates a new instance.
     *
     * @param items Group items.
     */
    static open(items: FancyItem): FancyInstance;
    /**
     * Wrapper for JQuery.FancyBox.open.
     * Creates a new instance.
     *
     * @param items Group items.
     * @param options FancyBox options.
     */
    static open(items: FancyItem, options: FancyOptions | undefined): FancyInstance;
    /**
     * Wrapper for JQuery.FancyBox.open.
     * Creates a new instance.
     *
     * @param items Group items.
     * @param options FancyBox options.
     * @param index The index of the item in the group.
     */
    static open(items: FancyItem, options: FancyOptions | undefined, index: number): FancyInstance;
    /**
     * Wrapper for JQuery.FancyBox.close.
     * Closes an existing instance.
     */
    static close(): void;
    /**
     * Wrapper for JQuery.FancyBox.destroy.
     * Closes all instances and decouples all events.
     */
    static destroy(): void;
    /**
     * Wrapper for JQuery.FancyBox.getInstance.
     * Returns the current instance.
     */
    static getInstance(): FancyInstance;
}
export default Fancy;
