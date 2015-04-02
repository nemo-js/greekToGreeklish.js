module.exports = {

	/**
	 * Convert greekString to Greekglish.
	 *
	 * @param  {String} greekString
	 * @return {String}
	 */
	convert: function (greekString, overrides) {
		'use strict';

		overrides = overrides || {};

		greekString = greekString.toLowerCase();
		var greeklishString = '';
		var lastChar = '';
		for (var i = 0; i < greekString.length; i++) {
			if (overrides[greekString[i]] != null) {
				greeklishString = greeklishString + overrides[greekString[i]];
				continue;
			}
			
			switch (greekString[i]) {
			case 'α':
			case 'ά':
				greeklishString = greeklishString + 'a';
				break;
			case 'β':
				greeklishString = greeklishString + 'b';
				break;
			case 'γ':
				greeklishString += 'g';
				break;
			case 'δ':
				greeklishString = greeklishString + 'd';
				break;
			case 'ε':
			case 'έ':
				greeklishString = greeklishString + 'e';
				break;
			case 'ζ':
				greeklishString = greeklishString + 'z';
				break;
			case 'η':
			case 'ή':
				greeklishString = greeklishString + 'i';
				break;
			case 'θ':
				greeklishString = greeklishString + 'th';
				break;
			case 'ι':
			case 'ί':
				greeklishString = greeklishString + 'i';
				break;
			case 'κ':
				greeklishString = greeklishString + 'k';
				break;
			case 'λ':
				greeklishString = greeklishString + 'l';
				break;
			case 'μ':
				greeklishString = greeklishString + 'm';
				break;
			case 'ν':
				greeklishString = greeklishString + 'n';
				break;
			case 'ξ':
				greeklishString = greeklishString + 'ks';
				break;
			case 'ο':
			case 'ό':
				greeklishString = greeklishString + 'o';
				break;
			case 'π':
				greeklishString = greeklishString + 'p';
				break;
			case 'ρ':
				greeklishString = greeklishString + 'r';
				break;
			case 'σ':
				greeklishString = greeklishString + 's';
				break;
			case 'τ':
				greeklishString = greeklishString + 't';
				break;
			case 'ύ':
			case 'υ':
				if (lastChar == 'ο' || lastChar == 'ό' || lastChar == 'o') {
					greeklishString = greeklishString + 'u';
				} else {
					greeklishString = greeklishString + 'i';
				}
				break;
			case 'φ':
				greeklishString = greeklishString + 'f';
				break;
			case 'χ':
				greeklishString = greeklishString + 'x';
				break;
			case 'ψ':
				greeklishString = greeklishString + 'ps';
				break;
			case 'ω':
			case 'ώ':
				greeklishString = greeklishString + 'o';
				break;
			default:
				greeklishString = greeklishString + greekString[i];
				break;
			}
			lastChar = greekString[i];
		}
		
		return greeklishString;
	}

};