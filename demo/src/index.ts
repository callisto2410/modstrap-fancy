import "./index.scss";

import Lexicon from "@modstrap/lexicon";
import Fancy, {FancyGroupItem} from "../../src/Fancy";

Lexicon.extend({
    fancy_close: {
        de: "Schließen",
    },
    fancy_next: {
        de: "Weiter",
    },
    fancy_prev: {
        de: "Zurück",
    },
    fancy_error: {
        de: "Die angeforderten Daten konnten nicht geladen werden. <br>Bitte versuchen Sie es später nochmal.",
    },
    fancy_play_start: {
        de: "Diaschau starten",
    },
    fancy_play_stop: {
        de: "Diaschau beenden",
    },
    fancy_screen: {
        de: "Vollbild",
    },
    fancy_thumbs: {
        de: "Vorschaubilder",
    },
    fancy_download: {
        de: "Herunterladen",
    },
    fancy_share: {
        de: "Teilen",
    },
    fancy_zoom: {
        de: "Maßstab",
    }
});

const buttons = Array.prototype.slice.call(document.querySelectorAll(".inline .button")) as HTMLElement[];
const group: FancyGroupItem[] = [];

for (const button of buttons) {
    const src = button.getAttribute("data-value") ?? "";
    const index = buttons.indexOf(button);

    group[index] = {
        src: src,
        type: "inline",
    };
}

document.body.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;
    const parent = target.parentElement as HTMLElement;

    /* Inline. */
    if (parent.classList.contains("inline")) {
        const index = buttons.indexOf(target);

        Fancy.open(group, undefined, index);
    }

    /* Toggle language. */
    if (parent.classList.contains("controls")) {
        Lexicon.locale = target.getAttribute("data-value") ?? "en";
        Fancy.translate();
    }
});
