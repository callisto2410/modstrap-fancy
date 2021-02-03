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
export interface FancyGroupItem extends FancyBoxGroupItem {
}
export interface FancyInstance extends FancyBoxInstance {
}
export interface FancyOptions extends FancyBoxOptions {
}
export declare type FancyItem = string | JQuery<HTMLElement> | FancyGroupItem | FancyGroupItem[];
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
     * Creates a new instance.
     *
     * @param items Group items.
     */
    static open(items: FancyItem): FancyInstance;
    /**
     * Creates a new instance.
     *
     * @param items Group items.
     * @param options FancyBox options.
     */
    static open(items: FancyItem, options: FancyOptions | undefined): FancyInstance;
    /**
     * Creates a new instance.
     *
     * @param items Group items.
     * @param options FancyBox options.
     * @param index The index of the item in the group.
     */
    static open(items: FancyItem, options: FancyOptions | undefined, index: number): FancyInstance;
    /**
     * Closes an existing instance.
     *
     * @param all Close all instances?
     */
    static close(all?: boolean): void;
    /**
     * Closes all instances and decouples all events.
     */
    static destroy(): void;
    /**
     * Returns the current instance.
     *
     * @param command Command for the current instance.
     */
    static getInstance(command?: string | (() => void)): FancyInstance;
}
export default Fancy;
