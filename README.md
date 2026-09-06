# Ashtothram & Slokam

A simple, mobile-friendly devotional reading collection, beginning with **Saraswati Suktam (Yajurvediya)** in Tamil.

Site: https://msathia.github.io/Ashtothram-Slokam/

## Content

The traditional hymn is transcribed from [Vaidika Vignanam](https://vignanam.org/tamil/saraswati-suktam-yajurvediya.html). Tamil text, Vedic accents, and source references are preserved. The seven navigation numbers are editorial additions. No modern commentary or translation is reproduced.

## Development

No dependencies or build step. Open `index.html` or run:

```sh
python3 -m http.server 8000
```

The hymn remains readable without JavaScript. JavaScript adds saved text-size controls and printing. Print styles also support the browser's Save as PDF option.

## Publishing

GitHub Pages serves the root of the `main` branch. Changes pushed to `main` publish automatically.

## Hanuman Ashtothram

[Hanuman Ashtothram](https://msathia.github.io/Ashtothram-Slokam/hanuman-ashtothram.html) adds 108 names in Tamil and English transliteration from [Sathia’s original Wix page](https://msathia.wixsite.com/msathia). Both versions retain the source wording and order, including its spellings and Tamil count markers. Individual navigation numbers are editorial additions. The original Wix page remains unchanged.

## Layout

The collection homepage follows the grouped-card navigation of [Anushtanam](https://github.com/msathia/Anushtanam), while preserving this site's original warm palette, Tamil typography, and reading controls. Saraswati remains the first collection entry, now at `saraswati-suktam.html`; Hanuman has direct Tamil and English section links. Both reading pages link back to the collection.

## Vedic text rendering

Saraswati Suktam embeds Noto Sans Tamil (OFL 1.1) as used by the source. The accented visargas in verse 6 and the closing Shanti mantra use U+11303 GRANTHA SIGN VISARGA in place of the source's ASCII colon; this prevents combining accents from generating dotted circles. All other hymn characters are retained.
