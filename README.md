# css-filter-bright 0.0.7

Css module of single purpose classes for filter bright

#### Stats

223 | 20 | 20
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-filter-bright
```

#### With Git

```
git clone https://github.com/tachyons-css/css-filter-bright
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-filter-bright";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-filter-bright">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*
   FILTER BRIGHT
*/
.bright-1 { filter: brightness( 0.25 ); }
.bright-2 { filter: brightness( 0.5 ); }
.bright-3 { filter: brightness( .75 ); }
.bright-4 { filter: brightness( 1 ); }
.bright-5 { filter: brightness( 2 ); }
@media screen and (min-width: 48em) {
 .bright-1-ns { filter: brightness( 0.25 ); }
 .bright-2-ns { filter: brightness( 0.5 ); }
 .bright-3-ns { filter: brightness( .75 ); }
 .bright-4-ns { filter: brightness( 1 ); }
 .bright-5-ns { filter: brightness( 2 ); }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .bright-1-m { filter: brightness( 0.25 ); }
 .bright-2-m { filter: brightness( 0.5 ); }
 .bright-3-m { filter: brightness( .75 ); }
 .bright-4-m { filter: brightness( 1 ); }
 .bright-5-m { filter: brightness( 2 ); }
}
@media screen and (min-width: 64em) {
 .bright-1-l { filter: brightness( 0.25 ); }
 .bright-2-l { filter: brightness( 0.5 ); }
 .bright-3-l { filter: brightness( .75 ); }
 .bright-4-l { filter: brightness( 1 ); }
 .bright-5-l { filter: brightness( 2 ); }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

ISC
