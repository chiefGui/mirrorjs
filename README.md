# Mirror.js

This is a super tiny plug-in made entirely with vanilla JavaScript to design
mixins between objects of your application. On the fly and without further
hassles.

### Motivation

Mirror.js is inspired by the minimalism and simplicity of Underscore.js. However,
its proposal is a little different: it solves just one of your problems which
is the reflection of methods from one object into another – that's why
its name is **Mirror.js**.

*I'm using lots of mixins on a project of my company – it's awesome! Try it yourself too!*

### How to use

First of all, clone it into your js' vendor folder:

`git clone https://github.com/chiefGui/mirrorjs/ .`

Then, explode in your markup:

`<script type="text/javascript" src="js/vendor/Mirror.js">`

Finally, it's time to code:

```js
var Human = {
  breathe: function () {
    console.log(this.name + ' is breathing.')
  }
};

var Gates = {
  name: 'Bill Gates'
};

var Jobs = {
  name: 'Steve Jobs'
};

Mirror.reflect(Human, Gates);
Mirror.reflect(Human, Jobs);

Gates.breathe();
Jobs.breathe();
```

### Tests

To run the tests, Jasmine is embedded in the application. Then,
just run in your browser the SpecRunner through `/jasmine/SpecRunner.html`.

### License

MIT