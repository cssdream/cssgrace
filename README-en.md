
# CSS Grace

> Better CSS writing

## Installation

    $ npm install cssgrace

## Quick Start

Example 1:

```js
var fs = require('fs')
var postcss = require('postcss')
var cssgrace = require('cssgrace')

var css = fs.readFileSync('input.css', 'utf8')

var output = postcss()
  .use(cssgrace)
  .process(css)
  .css
  
console.log('\n====>Output CSS:\n', output)  
```

Or just:

```js
var output = cssgrace.pack(css).css
```

input.css：

```css
.bar {
  background: rgba(255, 221, 153, 0.8);
}
```

You will get：

```css
.bar {
  background: rgba(255, 221, 153, 0.8);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ccffdd99', endColorstr='#ccffdd99');
}

:root .bar {
  filter: none;\9;
}
```


## More Demo


Refer to the [test](test) directory


## Contributing

* Install all the dependent modules.
* Respect the coding style (Use [EditorConfig](http://editorconfig.org/)).
* Add test cases in the [test](test) directory.
* Run the test cases.

```
$ git clone git@github.com:yisibl/cssgrace.git
$ git checkout -b patch
$ npm install
$ npm test
```

## Acknowledgements

* Thank the author of PostCSS [Andrey Sitnik](https://github.com/ai) for giving us such simple and easy CSS syntax analysis tools.


## [Changelog](CHANGELOG.md)

## [License](LICENSE)
