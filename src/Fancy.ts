import "@fancyapps/fancybox";
import Lexicon, {Translations} from "@modstrap/lexicon";

interface FancyGroupItem extends Omit<FancyBoxGroupItem, 'src'> {
    src: string | JQuery<HTMLElement>;
}

type FancyItems = string | JQuery<HTMLElement> | FancyGroupItem | FancyGroupItem[];

type FancyBoxItems = string | JQuery<HTMLElement> | FancyBoxGroupItem | FancyBoxGroupItem[];

/**
 * Adaptation for jQuery.FancyBox.
 *
 * @see init
 * @see translations
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
    static translations: Translations = {
        fancy_close: {
            en: 'Close',
            de: 'Schließen',
            ru: 'Закрыть',
        },
        fancy_next: {
            en: 'Next',
            de: 'Weiter',
            ru: 'Вперед',
        },
        fancy_prev: {
            en: 'Previous',
            de: 'Zurück',
            ru: 'Назад',
        },
        fancy_error: {
            en: 'The requested content cannot be loaded. <br>Please try again later.',
            de: 'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',
            ru: 'Не удалось загрузить запрошенный контент. <br>Пожалуйста попробуйте позже.',
        },
        fancy_play_start: {
            en: 'Start slideshow',
            de: 'Diaschau starten',
            ru: 'Слайдшоу',
        },
        fancy_play_stop: {
            en: 'Pause slideshow',
            de: 'Diaschau beenden',
            ru: 'Пауза',
        },
        fancy_screen: {
            en: 'Full screen',
            de: 'Vollbild',
            ru: 'Полный экран',
        },
        fancy_thumbs: {
            en: 'Thumbnails',
            de: 'Vorschaubilder',
            ru: 'Превью',
        },
        fancy_download: {
            en: 'Download',
            de: 'Herunterladen',
            ru: 'Загрузка',
        },
        fancy_share: {
            en: 'Share',
            de: 'Teilen',
            ru: 'Поделиться',
        },
        fancy_zoom: {
            en: 'Zoom',
            de: 'Maßstab',
            ru: 'Зум',
        },
    };

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
     */
    static init(): void {
        if (this.initiated) return;

        Lexicon.extend(this.translations);

        delete $.fancybox.defaults.i18n?.en;
        delete $.fancybox.defaults.i18n?.de;

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

export default Fancy;
export {
    FancyGroupItem,
}
