import "./index.scss";

import Lexicon from "@modstrap/lexicon";
import Fancy, {FancyGroupItem} from "../../src/fancy";

/* Toggle language. */
const toggle = $('.toggle-lang');

toggle.on('click', () => {
    Lexicon.locale = (Lexicon.locale === 'en') ? 'ru' : 'en';
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
        const elt = $(element);

        group[index] = {
            src: elt,
            type: 'html',
            opts: {
                caption: elt.attr('data-caption')
            }
        };
    });

    Fancy.open(group, index);
});
