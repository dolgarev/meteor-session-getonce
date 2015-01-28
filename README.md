meteor-session-getonce
====================
Adds a method `getOnce` to Session.

```js
Session.set('foo', 'bar');
Session.getOnce('foo'); // => "bar"
Session.get('foo'); // => undefined
```
