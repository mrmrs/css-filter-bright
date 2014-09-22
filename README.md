# CSS FILTER BRIGHT

  Mobile-first classes for css-filter-bright.
  Set the desired css-filter-bright on any element for any breakpoint.
  Base class names are namespaced across three breakpoints:

*  -ns = not-small (covers everything larger than mobile)
*  -m  = medium
*  -l  = large

## Install
Grab the css partial from github and include it in your project or alternatively
you can install it via npm:
```
npm install --save-dev css-filter-bright
```
View on [npm](https://www.npmjs.org/package/css-filter-bright)


## File Size

1.0K filter-bright.css
821B filter-bright.min.css 
191B minified and gzipped

## The Code
```
.bright-1 { filter: brightness(0.25); }
.bright-2 { filter: brightness(0.5); }
.bright-3 { filter: brightness(.75); }
.bright-4 { filter: brightness(1); }
.bright-5 { filter: brightness(2); }

@media screen and (min-width: 48em) {
  .bright-1-ns { filter: brightness(0.25); }
  .bright-2-ns { filter: brightness(0.5); }
  .bright-3-ns { filter: brightness(.75); }
  .bright-4-ns { filter: brightness(1); }
  .bright-5-ns { filter: brightness(2); }
}

@media screen and (min-width: 48em) and (max-width: 64em) {
  .bright-1-m { filter: brightness(0.25); }
  .bright-2-m { filter: brightness(0.5); }
  .bright-3-m { filter: brightness(.75); }
  .bright-4-m { filter: brightness(1); }
  .bright-5-m { filter: brightness(2); }
}

@media screen and (min-width: 64em)  {
  .bright-1-l { filter: brightness(0.25); }
  .bright-2-l { filter: brightness(0.5); }
  .bright-3-l { filter: brightness(.75); }
  .bright-4-l { filter: brightness(1); }
  .bright-5-l { filter: brightness(2); }
}


```

## Author

[http://mrmrs.cc - Entire internet gateway to all things mrmrs](http://mrmrs.cc)
[http://mrmrs.io - Open source projects](http://mrmrs.io)

## License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

