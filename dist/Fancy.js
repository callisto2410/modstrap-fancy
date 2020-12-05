"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@fancyapps/fancybox");
const lexicon_1 = require("@modstrap/lexicon");
/**
 * Adaptation for jQuery.FancyBox.
 *
 * @see extend
 * @see translate
 * @see init
 * @see open
 * @see close
 * @see destroy
 * @see getInstance
 */
class Fancy {
    /**
     * Extends default translations.
     *
     * @param translations
     */
    static extend(translations) {
        lexicon_1.default.extend(translations);
    }
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
        if (this.initiated)
            return;
        lexicon_1.default.extend(this.translations);
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
     * @param mixed Options or index.
     * @param index The index of the item in the group.
     */
    static open(items, mixed, index) {
        const options = (typeof mixed === 'number') ? undefined : mixed;
        const idx = (typeof mixed === 'number') ? mixed : index;
        return $.fancybox.open(items, options, idx);
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
exports.default = Fancy;
