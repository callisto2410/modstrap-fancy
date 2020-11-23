"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@fancyapps/fancybox");
const lexicon_1 = require("@modstrap/lexicon");
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
     * Performs translation.
     */
    static translate() {
        if (!$.fancybox.defaults.i18n)
            throw new Error('"$.fancybox.defaults.i18n" is not defined.');
        $.fancybox.defaults.i18n['lexicon'] = {
            CLOSE: lexicon_1.default.get('fancy_close'),
            NEXT: lexicon_1.default.get('fancy_next'),
            PREV: lexicon_1.default.get('fancy_prev'),
            ERROR: lexicon_1.default.get('fancy_error'),
            PLAY_START: lexicon_1.default.get('fancy_play_start'),
            PLAY_STOP: lexicon_1.default.get('fancy_play_stop'),
            FULL_SCREEN: lexicon_1.default.get('fancy_screen'),
            THUMBS: lexicon_1.default.get('fancy_thumbs'),
            DOWNLOAD: lexicon_1.default.get('fancy_download'),
            SHARE: lexicon_1.default.get('fancy_share'),
            ZOOM: lexicon_1.default.get('fancy_zoom'),
        };
    }
    /**
     *  Setting up.
     */
    static init() {
        var _a, _b;
        if (this.initiated)
            return;
        lexicon_1.default.extend(this.translations);
        (_a = $.fancybox.defaults.i18n) === null || _a === void 0 ? true : delete _a.en;
        (_b = $.fancybox.defaults.i18n) === null || _b === void 0 ? true : delete _b.de;
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
     * @param mixed Options or index.
     * @param index The index of the item in the group.
     */
    static open(items, mixed, index) {
        const _options = (typeof mixed === 'number') ? undefined : mixed;
        const _index = (typeof mixed === 'number') ? mixed : index;
        return $.fancybox.open(items, _options, _index);
    }
    /**
     * Wrapper for JQuery.FancyBox.close.
     * Close instance.
     *
     * @param all Close all instances?
     */
    static close(all) {
        $.fancybox.close(all);
    }
    /**
     * Wrapper for JQuery.FancyBox.destroy.
     * Close all instances and unbind all events.
     */
    static destroy() {
        $.fancybox.destroy();
    }
    /**
     * Wrapper for JQuery.FancyBox.getInstance.
     * Get reference to currently active FancyBox instance.
     *
     * @param command Command for the current instance.
     */
    static getInstance(command) {
        return $.fancybox.getInstance(command);
    }
}
/**
 * Reconfiguration prevention indicator.
 *
 * @private
 */
Fancy.initiated = false;
/**
 *  Default translations.
 */
Fancy.translations = {
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
exports.default = Fancy;
