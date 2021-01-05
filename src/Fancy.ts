import Lexicon, {LexiconTranslations} from "@modstrap/lexicon";
import "@fancyapps/fancybox";

export interface FancyTranslations extends LexiconTranslations {
    fancy_close: {
        [locale: string]: string;
    }
    fancy_next: {
        [locale: string]: string;
    }
    fancy_prev: {
        [locale: string]: string;
    }
    fancy_error: {
        [locale: string]: string;
    }
    fancy_play_start: {
        [locale: string]: string;
    }
    fancy_play_stop: {
        [locale: string]: string;
    }
    fancy_screen: {
        [locale: string]: string;
    }
    fancy_thumbs: {
        [locale: string]: string;
    }
    fancy_download: {
        [locale: string]: string;
    }
    fancy_share: {
        [locale: string]: string;
    }
    fancy_zoom: {
        [locale: string]: string;
    }
}

export type FancyGroupItem = FancyBoxGroupItem;

export type FancyItem = string | JQuery<HTMLElement> | FancyGroupItem | FancyGroupItem[];

export type FancyInstance = FancyBoxInstance;

export type FancyOptions = FancyBoxOptions;


/**
 * Helper class for initial fancybox setup.
 */
class FancyTuning {
    /**
     * Reconfiguration prevention indicator.
     */
    private static isTuned: boolean = false;

    /**
     *  Default translations.
     */
    private static translations: FancyTranslations = {
        fancy_close: {
            en: "Close",
            ru: "Закрыть",
        },
        fancy_next: {
            en: "Next",
            ru: "Вперед",
        },
        fancy_prev: {
            en: "Previous",
            ru: "Назад",
        },
        fancy_error: {
            en: "The requested content cannot be loaded. <br>Please try again later.",
            ru: "Не удалось загрузить запрошенный контент. <br>Пожалуйста попробуйте позже.",
        },
        fancy_play_start: {
            en: "Start slideshow",
            ru: "Слайд-шоу",
        },
        fancy_play_stop: {
            en: "Pause slideshow",
            ru: "Пауза",
        },
        fancy_screen: {
            en: "Full screen",
            ru: "Полный экран",
        },
        fancy_thumbs: {
            en: "Thumbnails",
            ru: "Превью",
        },
        fancy_download: {
            en: "Download",
            ru: "Загрузка",
        },
        fancy_share: {
            en: "Share",
            ru: "Поделиться",
        },
        fancy_zoom: {
            en: "Zoom",
            ru: "Зум",
        },
    };

    /**
     * Initialization.
     */
    public static init(): void {
        if (this.isTuned) return;

        $.fancybox.defaults.i18n = {};
        $.fancybox.defaults.lang = "lexicon";
        $.fancybox.defaults.animationEffect = "zoom-in-out";
        $.fancybox.defaults.transitionEffect = "zoom-in-out";
        $.fancybox.defaults.loop = true;
        $.fancybox.defaults.smallBtn = false;
        $.fancybox.defaults.buttons = [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close",
        ];

        Lexicon.extend(this.translations);
        this.translate();

        this.isTuned = true;
    }

    /**
     * Performs translation.
     */
    public static translate(): void {
        if (!$.fancybox.defaults.i18n) throw new Error("'$.fancybox.defaults.i18n' is not defined.");

        $.fancybox.defaults.i18n["lexicon"] = {
            CLOSE: Lexicon.get("fancy_close"),
            NEXT: Lexicon.get("fancy_next"),
            PREV: Lexicon.get("fancy_prev"),
            ERROR: Lexicon.get("fancy_error"),
            PLAY_START: Lexicon.get("fancy_play_start"),
            PLAY_STOP: Lexicon.get("fancy_play_stop"),
            FULL_SCREEN: Lexicon.get("fancy_screen"),
            THUMBS: Lexicon.get("fancy_thumbs"),
            DOWNLOAD: Lexicon.get("fancy_download"),
            SHARE: Lexicon.get("fancy_share"),
            ZOOM: Lexicon.get("fancy_zoom"),
        };
    }
}

FancyTuning.init();

/**
 * Adaptation for jQuery.FancyBox.
 *
 * @see translate
 * @see open
 * @see close
 * @see destroy
 * @see getInstance
 */
export class Fancy {
    /**
     * Performs translation.
     */
    public static translate(): void {
        FancyTuning.translate();
    }

    /**
     * Wrapper for JQuery.FancyBox.open.
     * Creates a new instance.
     *
     * @param items Group items.
     */
    public static open(items: FancyItem): FancyInstance;

    /**
     * Wrapper for JQuery.FancyBox.open.
     * Creates a new instance.
     *
     * @param items Group items.
     * @param options FancyBox options.
     */
    public static open(items: FancyItem, options: FancyOptions | undefined): FancyInstance;

    /**
     * Wrapper for JQuery.FancyBox.open.
     * Creates a new instance.
     *
     * @param items Group items.
     * @param options FancyBox options.
     * @param index The index of the item in the group.
     */
    public static open(items: FancyItem, options: FancyOptions | undefined, index: number): FancyInstance;

    /**
     * Wrapper for JQuery.FancyBox.open.
     * Creates a new instance.
     *
     * @param items Group items.
     * @param options Options.
     * @param index The index of the item in the group.
     */
    public static open(items: FancyItem, options?: FancyOptions, index?: number): FancyInstance {
        return $.fancybox.open(items, options, index);
    }

    /**
     * Wrapper for JQuery.FancyBox.close.
     * Closes an existing instance.
     */
    public static close(): void;

    /**
     * Wrapper for JQuery.FancyBox.close.
     * Closes an existing instance.
     *
     * @param all Close all instances?
     */
    public static close(all?: boolean): void {
        $.fancybox.close(all);
    }

    /**
     * Wrapper for JQuery.FancyBox.destroy.
     * Closes all instances and decouples all events.
     */
    public static destroy(): void {
        $.fancybox.destroy();
    }

    /**
     * Wrapper for JQuery.FancyBox.getInstance.
     * Returns the current instance.
     */
    public static getInstance(): FancyInstance;

    /**
     * Wrapper for JQuery.FancyBox.getInstance.
     * Returns the current instance.
     *
     * @param command Command for the current instance.
     */
    public static getInstance(command?: string | (() => void)): FancyInstance {
        return $.fancybox.getInstance(command);
    }
}

export default Fancy;
