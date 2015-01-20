meteor-session-getonce
====================
Adds a a simple `getOnce` method to Session.

```js
Session.set('foo', 'bar');
Session.getOnce('foo'); // => "bar"
Session.get('foo'); // => undefined
```
