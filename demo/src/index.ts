import "./index.scss";

import Lexicon from "@modstrap/lexicon";
import Fancy, {FancyGroupItem} from "../../src/Fancy";

Fancy.extend({
    fancy_close: {
        de: 'Schließen',
    },
    fancy_next: {
        de: 'Weiter',
    },
    fancy_prev: {
        de: 'Zurück',
    },
    fancy_error: {
        de: 'Die angeforderten Daten konnten nicht geladen werden. <br>Bitte versuchen Sie es später nochmal.',
    },
    fancy_play_start: {
        de: 'Diaschau starten',
    },
    fancy_play_stop: {
        de: 'Diaschau beenden',
    },
    fancy_screen: {
        de: 'Vollbild',
    },
    fancy_thumbs: {
        de: 'Vorschaubilder',
    },
    fancy_download: {
        de: 'Herunterladen',
    },
    fancy_share: {
        de: 'Teilen',
    },
    fancy_zoom: {
        de: 'Maßstab',
    }
});

/* Toggle language. */
const toggle = $('.toggle-lang');

toggle.on('click', (event) => {
    Lexicon.locale = $(event.currentTarget).attr('data-value') ?? 'en';
    Fancy.translate();
});

/* Inline. */
const buttons = $('.inline .button');

buttons.on('click', event => {
    const current = $(event.currentTarget);
    const index = buttons.index(current);
    const group: FancyGroupItem[] = [];
    const inline = $('[data-group="inline"]');

    inline.each((index, element) => {
        const elm = $(element);

        group[index] = {
            src: elm,
            type: 'html',
            opts: {
                caption: elm.attr('data-caption')
            }
        };
    });

    Fancy.open(group, index);
});
