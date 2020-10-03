"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@fancyapps/fancybox");
var lexicon_1 = require("@modstrap/lexicon");
var Fancy = (function () {
    function Fancy() {
    }
    Fancy.translate = function () {
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
    };
    Fancy.setup = function () {
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
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close",
        ];
        this.translate();
        this.initiated = true;
    };
    Fancy.open = function (items, mixed, index) {
        var _options = (typeof mixed === 'number') ? undefined : mixed;
        var _index = (typeof mixed === 'number') ? mixed : index;
        return $.fancybox.open(items, _options, _index);
    };
    Fancy.close = function (all) {
        $.fancybox.close(all);
    };
    Fancy.destroy = function () {
        $.fancybox.destroy();
    };
    Fancy.getInstance = function (command) {
        return $.fancybox.getInstance(command);
    };
    Fancy.initiated = false;
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
    return Fancy;
}());
Fancy.setup();
exports.default = Fancy;
