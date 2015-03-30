# greekToGreekglish.js

greekToGreekglish is a utility module which converts Greek strings to Greekglish.
Install it via `npm install greekToGreekglish`.


## Quick Example

```javascript
greekToGreekglish.convert('Καλημέρα κόσμε'); //returns "kalimera kosme"
```

You can also override the default behaviour by providing another parameter 

```javascript
greekToGreekglish.convert('Καλημέρα κόσμε', { 'σ': 'z' }); //returns "kalimera kozme"
```