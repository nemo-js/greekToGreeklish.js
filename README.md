# greekToGreeklish.js

greekToGreekglish is a utility module which converts Greek strings to Greeklish.
Install it via `npm install greekToGreekglish`.


## Quick Example

```javascript
greekToGreeklish.convert('Καλημέρα κόσμε'); //returns "kalimera kosme"
```

You can also override the default behaviour by providing another parameter 

```javascript
greekToGreeklish.convert('Καλημέρα κόσμε', { 'σ': 'z' }); //returns "kalimera kozme"
```