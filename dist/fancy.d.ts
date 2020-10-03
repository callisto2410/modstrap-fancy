/// <reference types="fancybox" />
/// <reference types="jquery" />
import "@fancyapps/fancybox";
import { Translations } from "@modstrap/lexicon";
interface FancyGroupItem extends Omit<FancyBoxGroupItem, 'src'> {
    src: string | JQuery<HTMLElement>;
}
declare type FancyItems = string | JQuery<HTMLElement> | FancyGroupItem | FancyGroupItem[];
declare class Fancy {
    private static initiated;
    static translations: Translations;
    static translate(): void;
    static setup(): void;
    static open(items: FancyItems): FancyBoxInstance;
    static open(items: FancyItems, options: FancyBoxOptions): FancyBoxInstance;
    static open(items: FancyItems, index: number): FancyBoxInstance;
    static open(items: FancyItems, options: FancyBoxOptions, index: number): FancyBoxInstance;
    static close(all?: boolean): void;
    static destroy(): void;
    static getInstance(command?: string | (() => void)): FancyBoxInstance;
}
export default Fancy;
export { FancyGroupItem, };
