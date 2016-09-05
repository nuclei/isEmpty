# isempty
A minimal package to set/remove a class to any empty input/textarea.

## Installation

### via npm
```
npm install isemptyjs --save
```

### via bower
```
bower install isemptyjs --save
```

## API
If you just want an `is-active` class to be toggled on all inputs and textareas, you can just roll with the defaults.

```javascript
isempty();
```

If you want to only run this functionality on a specific set of elements, you can supply a `nodeList` to the function. Optionally you can provide the config object as the second parameter.

```javascript
isempty(document.querySelectorAll('.my-elements'), {
    'class': 'is-toggled'
});
```

If you do not provide a `nodeList` the fallback will be used.
```javascript
document.querySelectorAll('textarea, input:not([type=hidden]):not([type="radio"]):not([type="checkbox"]):not([type="submit"]):not([type="button"])')
```

Additionally you have the option to specify the class you would like to toggle without specifying a set of elements, by just providing the options object.

```javascript
isempty({
    'class': 'is-toggled'
});
```
