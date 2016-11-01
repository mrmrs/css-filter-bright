# css-filter-bright 1.0.6

Css module of single purpose classes for filter bright

#### Stats

245 | 20 | 40
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-filter-bright
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/css-filter-bright
```

ssh:
```
git clone git@github.com:tachyons-css/css-filter-bright.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-filter-bright";
```

Then process the css using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the css

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://unpkg.com/css-filter-bright@1.0.6/css/css-filter-bright.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-filter-bright">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*
   FILTER BRIGHT
*/
.bright-1 { -webkit-filter: brightness( .25 ); filter: brightness( .25 ); }
.bright-2 { -webkit-filter: brightness( .5 ); filter: brightness( .5 ); }
.bright-3 { -webkit-filter: brightness( .75 ); filter: brightness( .75 ); }
.bright-4 { -webkit-filter: brightness( 1 ); filter: brightness( 1 ); }
.bright-5 { -webkit-filter: brightness( 2 ); filter: brightness( 2 ); }
@media screen and (min-width: 48em) {
 .bright-1-ns { -webkit-filter: brightness( .25 ); filter: brightness( .25 ); }
 .bright-2-ns { -webkit-filter: brightness( .5 ); filter: brightness( .5 ); }
 .bright-3-ns { -webkit-filter: brightness( .75 ); filter: brightness( .75 ); }
 .bright-4-ns { -webkit-filter: brightness( 1 ); filter: brightness( 1 ); }
 .bright-5-ns { -webkit-filter: brightness( 2 ); filter: brightness( 2 ); }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .bright-1-m { -webkit-filter: brightness( .25 ); filter: brightness( .25 ); }
 .bright-2-m { -webkit-filter: brightness( .5 ); filter: brightness( .5 ); }
 .bright-3-m { -webkit-filter: brightness( .75 ); filter: brightness( .75 ); }
 .bright-4-m { -webkit-filter: brightness( 1 ); filter: brightness( 1 ); }
 .bright-5-m { -webkit-filter: brightness( 2 ); filter: brightness( 2 ); }
}
@media screen and (min-width: 64em) {
 .bright-1-l { -webkit-filter: brightness( .25 ); filter: brightness( .25 ); }
 .bright-2-l { -webkit-filter: brightness( .5 ); filter: brightness( .5 ); }
 .bright-3-l { -webkit-filter: brightness( .75 ); filter: brightness( .75 ); }
 .bright-4-l { -webkit-filter: brightness( 1 ); filter: brightness( 1 ); }
 .bright-5-l { -webkit-filter: brightness( 2 ); filter: brightness( 2 ); }
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

