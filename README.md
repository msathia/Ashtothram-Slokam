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
