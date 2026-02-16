# css-filter-bright

Functional CSS for filter-bright

## Filesize

| File | Size |
|------|------|
| `dist/filter-bright.css` | 1029 bytes |
| `dist/filter-bright.min.css` | 745 bytes (175 Gzipped) |

## Install

```sh
npm install css-filter-bright
```

## Usage

### Import

```css
@import "css-filter-bright";
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/css-filter-bright/dist/filter-bright.min.css">
```

### Direct

```html
<link rel="stylesheet" href="path/to/css-filter-bright/dist/filter-bright.min.css">
```

## Classes

| Class   | Value                    |
|---------|--------------------------|
| `.bright1` | `filter: brightness(.25);` |
| `.bright2` | `filter: brightness(.5);` |
| `.bright3` | `filter: brightness(.75);` |
| `.bright4` | `filter: brightness();` |
| `.bright5` | `filter: brightness(2);` |
| `.bright1-s` | `filter: brightness(.25);` |
| `.bright2-s` | `filter: brightness(.5);` |
| `.bright3-s` | `filter: brightness(.75);` |
| `.bright4-s` | `filter: brightness();` |
| `.bright5-s` | `filter: brightness(2);` |
| `.bright1-m` | `filter: brightness(.25);` |
| `.bright2-m` | `filter: brightness(.5);` |
| `.bright3-m` | `filter: brightness(.75);` |
| `.bright4-m` | `filter: brightness();` |
| `.bright5-m` | `filter: brightness(2);` |
| `.bright1-l` | `filter: brightness(.25);` |
| `.bright2-l` | `filter: brightness(.5);` |
| `.bright3-l` | `filter: brightness(.75);` |
| `.bright4-l` | `filter: brightness();` |
| `.bright5-l` | `filter: brightness(2);` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.bright1-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/filter-bright.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/filter-bright.css` — formatted
- `dist/filter-bright.min.css` — minified

## License

MIT
