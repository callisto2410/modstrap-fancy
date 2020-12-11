import "@fancyapps/fancybox";
import Lexicon, {Translations as LexiconTranslations} from "@modstrap/lexicon";

interface FancyGroupItem extends Omit<FancyBoxGroupItem, 'src'> {
    src: string | JQuery<HTMLElement>;
}

interface Translations extends LexiconTranslations {
    fancy_close: {
        [lang: string]: string;
    };
    fancy_next: {
        [lang: string]: string;
    };
    fancy_prev: {
        [lang: string]: string;
    };
    fancy_error: {
        [lang: string]: string;
    };
    fancy_play_start: {
        [lang: string]: string;
    };
    fancy_play_stop: {
        [lang: string]: string;
    };
    fancy_screen: {
        [lang: string]: string;
    };
    fancy_thumbs: {
        [lang: string]: string;
    };
    fancy_download: {
        [lang: string]: string;
    };
    fancy_share: {
        [lang: string]: string;
    };
    fancy_zoom: {
        [lang: string]: string;
    };
}

type FancyItems = string | JQuery<HTMLElement> | FancyGroupItem | FancyGroupItem[];

type FancyBoxItems = string | JQuery<HTMLElement> | FancyBoxGroupItem | FancyBoxGroupItem[];

/**
 * Adaptation for jQuery.FancyBox.
 *
 * @see extendTranslations
 * @see translate
 * @see init
 * @see open
 * @see close
 * @see destroy
 * @see getInstance
 */
class Fancy {
    /**
     * Reconfiguration prevention indicator.
     *
     * @private
     */
    private static initiated: boolean = false;

    /**
     *  Default translations.
     */
    private static translations: Translations = {
        fancy_close: {
            en: 'Close',
            ru: 'Закрыть',
        },
        fancy_next: {
            en: 'Next',
            ru: 'Вперед',
        },
        fancy_prev: {
            en: 'Previous',
            ru: 'Назад',
        },
        fancy_error: {
            en: 'The requested content cannot be loaded. <br>Please try again later.',
            ru: 'Не удалось загрузить запрошенный контент. <br>Пожалуйста попробуйте позже.',
        },
        fancy_play_start: {
            en: 'Start slideshow',
            ru: 'Слайд-шоу',
        },
        fancy_play_stop: {
            en: 'Pause slideshow',
            ru: 'Пауза',
        },
        fancy_screen: {
            en: 'Full screen',
            ru: 'Полный экран',
        },
        fancy_thumbs: {
            en: 'Thumbnails',
            ru: 'Превью',
        },
        fancy_download: {
            en: 'Download',
            ru: 'Загрузка',
        },
        fancy_share: {
            en: 'Share',
            ru: 'Поделиться',
        },
        fancy_zoom: {
            en: 'Zoom',
            ru: 'Зум',
        },
    };

    /**
     * Extends default translations.
     *
     * @param translations
     */
    static extendTranslations(translations: Translations) {
        Lexicon.extend(translations);
    }

    /**
     * Performs translation.
     */
    static translate(): void {
        if (!$.fancybox.defaults.i18n) throw new Error('"$.fancybox.defaults.i18n" is not defined.');

        $.fancybox.defaults.i18n['lexicon'] = {
            CLOSE: Lexicon.get('fancy_close'),
            NEXT: Lexicon.get('fancy_next'),
            PREV: Lexicon.get('fancy_prev'),
            ERROR: Lexicon.get('fancy_error'),
            PLAY_START: Lexicon.get('fancy_play_start'),
            PLAY_STOP: Lexicon.get('fancy_play_stop'),
            FULL_SCREEN: Lexicon.get('fancy_screen'),
            THUMBS: Lexicon.get('fancy_thumbs'),
            DOWNLOAD: Lexicon.get('fancy_download'),
            SHARE: Lexicon.get('fancy_share'),
            ZOOM: Lexicon.get('fancy_zoom'),
        };
    }

    /**
     *  Setting up.
     *  Runs by default when importing a module.
     */
    static init(): void {
        if (this.initiated) return;

        Lexicon.extend(this.translations);

        $.fancybox.defaults.i18n = {};
        $.fancybox.defaults.lang = 'lexicon';
        $.fancybox.defaults.animationEffect = 'zoom-in-out';
        $.fancybox.defaults.transitionEffect = 'zoom-in-out';
        $.fancybox.defaults.loop = true;
        $.fancybox.defaults.smallBtn = false;
        $.fancybox.defaults.buttons = [
            'zoom',
            'slideShow',
            'fullScreen',
            'thumbs',
            'close',
        ];

        this.translate();
        this.initiated = true;
    }

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
     * Wrapper for JQuery.FancyBox.open.
     * Starts new FancyBox instance.
     *
     * @param items Group items.
     * @param mixed Options or index.
     * @param index The index of the item in the group.
     */
    static open(items: FancyItems, mixed?: FancyBoxOptions | number, index?: number): FancyBoxInstance {
        const options = (typeof mixed === 'number') ? undefined : mixed;
        const idx = (typeof mixed === 'number') ? mixed : index;

        return $.fancybox.open(<FancyBoxItems>items, options, idx);
    }

    /**
     * Wrapper for JQuery.FancyBox.close.
     * Close instance.
     *
     * @param all Close all instances?
     */
    static close(all?: boolean): void {
        $.fancybox.close(all);
    }

    /**
     * Wrapper for JQuery.FancyBox.destroy.
     * Close all instances and unbind all events.
     */
    static destroy(): void {
        $.fancybox.destroy();
    }

    /**
     * Wrapper for JQuery.FancyBox.getInstance.
     * Get reference to currently active FancyBox instance.
     *
     * @param command Command for the current instance.
     */
    static getInstance(command?: string | (() => void)): FancyBoxInstance {
        return $.fancybox.getInstance(command);
    }
}

Fancy.init();

export default Fancy;
export {
    FancyGroupItem,
}
