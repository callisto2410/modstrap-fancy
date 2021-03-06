"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fancy = void 0;
const lexicon_1 = __importDefault(require("@modstrap/lexicon"));
require("@fancyapps/fancybox");
/**
 * Helper class for initial jQuery.FancyBox setup.
 */
class Init {
    /**
     * Basic setup.
     */
    static main() {
        if (this.initiated)
            return;
        $.fancybox.defaults.i18n = {};
        $.fancybox.defaults.lang = "lexicon";
        $.fancybox.defaults.animationEffect = "zoom-in-out";
        $.fancybox.defaults.transitionEffect = "zoom-in-out";
        $.fancybox.defaults.loop = true;
        $.fancybox.defaults.smallBtn = false;
        $.fancybox.defaults.closeExisting = true;
        $.fancybox.defaults.buttons = [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close",
        ];
        lexicon_1.default.extend(this.translations);
        this.translate();
        this.initiated = true;
    }
    /**
     * Performs translation.
     */
    static translate() {
        if (!$.fancybox.defaults.i18n)
            throw new Error("'$.fancybox.defaults.i18n' is not defined.");
        $.fancybox.defaults.i18n["lexicon"] = {
            CLOSE: lexicon_1.default.get("fancy_close"),
            NEXT: lexicon_1.default.get("fancy_next"),
            PREV: lexicon_1.default.get("fancy_prev"),
            ERROR: lexicon_1.default.get("fancy_error"),
            PLAY_START: lexicon_1.default.get("fancy_play_start"),
            PLAY_STOP: lexicon_1.default.get("fancy_play_stop"),
            FULL_SCREEN: lexicon_1.default.get("fancy_screen"),
            THUMBS: lexicon_1.default.get("fancy_thumbs"),
            DOWNLOAD: lexicon_1.default.get("fancy_download"),
            SHARE: lexicon_1.default.get("fancy_share"),
            ZOOM: lexicon_1.default.get("fancy_zoom"),
        };
    }
}
/**
 * Reconfiguration prevention indicator.
 *
 * @private
 */
Init.initiated = false;
/**
 * Default translations.
 *
 * @private
 */
Init.translations = {
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
Init.main();
/**
 * Adaptation for jQuery.FancyBox.
 *
 * @see translate
 * @see open
 * @see close
 * @see destroy
 * @see getInstance
 *
 * Fancy:
 * [Github]{@link https://github.com/callisto2410/modstrap-fancy}
 *
 * FancyBox:
 * [Github]{@link https://fancyapps.com/fancybox/3/}
 * [Homepage]{@link https://github.com/fancyapps/fancybox}
 */
class Fancy {
    /**
     * Performs translation.
     */
    static translate() {
        Init.translate();
    }
    /**
     * Creates a new instance.
     *
     * @param items Group items.
     * @param options Options.
     * @param index The index of the item in the group.
     */
    static open(items, options, index) {
        return $.fancybox.open(items, options, index);
    }
    /**
     * Closes an existing instance.
     *
     * @param all Close all instances?
     */
    static close(all) {
        $.fancybox.close(all);
    }
    /**
     * Closes all instances and decouples all events.
     */
    static destroy() {
        $.fancybox.destroy();
    }
    /**
     * Returns the current instance.
     *
     * @param command Command for the current instance.
     */
    static getInstance(command) {
        return $.fancybox.getInstance(command);
    }
}
exports.Fancy = Fancy;
exports.default = Fancy;
