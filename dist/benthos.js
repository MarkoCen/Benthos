(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["benthos"] = factory();
	else
		root["benthos"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _config = __webpack_require__(1);
	
	Object.keys(_config).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _config[key];
	    }
	  });
	});
	
	var _index = __webpack_require__(10);
	
	Object.keys(_index).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _index[key];
	    }
	  });
	});
	
	var _compile = __webpack_require__(44);
	
	Object.keys(_compile).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _compile[key];
	    }
	  });
	});
	
	var _schema = __webpack_require__(45);
	
	Object.keys(_schema).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _schema[key];
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.locale = locale;
	exports.getDataSet = getDataSet;
	
	var _index = __webpack_require__(2);
	
	var datasets = _interopRequireWildcard(_index);
	
	var _errors = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var location = 'en';
	
	function locale(loc) {
	    if (!datasets[loc]) throw (0, _errors.NO_DATASET_FOUND)(loc);
	    location = loc || 'en';
	}
	
	function getDataSet(newLocale) {
	    var dataset = datasets[newLocale || location];
	    if (dataset) return dataset;else throw (0, _errors.NO_DATASET_FOUND)(newLocale);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(3);
	
	Object.keys(_index).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _index[key];
	    }
	  });
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.en = undefined;
	
	var _gender_data = __webpack_require__(4);
	
	var _lastNames_data = __webpack_require__(5);
	
	var _firstNames_data = __webpack_require__(6);
	
	var _location_data = __webpack_require__(7);
	
	var _text_data = __webpack_require__(8);
	
	var en = exports.en = {
	    gender: _gender_data.gender,
	    lastNames: _lastNames_data.lastNames,
	    firstNames: { male: _firstNames_data.male, female: _firstNames_data.female },
	    location: _location_data.location,
	    text: _text_data.text
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var gender = exports.gender = {
	    0: 'Female',
	    1: 'Male'
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var lastNames = exports.lastNames = ["Smith", "Jones", "Williams", "Taylor", "Brown", "Davies", "Evans", "Wilson", "Thomas", "Johnson", "Roberts", "Robinson", "Thompson", "Wright", "Walker", "White", "Edwards", "Hughes", "Green", "Hall", "Lewis", "Harris", "Clarke", "Patel", "Jackson", "Wood", "Turner", "Martin", "Cooper", "Hill", "Ward", "Morris", "Moore", "Clark", "Lee", "King", "Baker", "Harrison", "Morgan", "Allen", "James", "Scott", "Phillips", "Watson", "Davis", "Parker", "Price", "Bennett", "Young", "Griffiths", "Mitchell", "Kelly", "Cook", "Carter", "Richardson", "Bailey", "Collins", "Bell", "Shaw", "Murphy", "Miller", "Cox", "Richards", "Khan", "Marshall", "Anderson", "Simpson", "Ellis", "Adams", "Singh", "Begum", "Wilkinson", "Foster", "Chapman", "Powell", "Webb", "Rogers", "Gray", "Mason", "Ali", "Hunt", "Hussain", "Campbell", "Matthews", "Owen", "Palmer", "Holmes", "Mills", "Barnes", "Knight", "Lloyd", "Butler", "Russell", "Barker", "Fisher", "Stevens", "Jenkins", "Murray", "Dixon", "Harvey", "Graham", "Pearson", "Ahmed", "Fletcher", "Walsh", "Kaur", "Gibson", "Howard", "Andrews", "Stewart", "Elliott", "Reynolds", "Saunders", "Payne", "Fox", "Ford", "Pearce", "Day", "Brooks", "West", "Lawrence", "Cole", "Atkinson", "Bradley", "Spencer", "Gill", "Dawson", "Ball", "Burton", "O'brien", "Watts", "Rose", "Booth", "Perry", "Ryan", "Grant", "Wells", "Armstrong", "Francis", "Rees", "Hayes", "Hart", "Hudson", "Newman", "Barrett", "Webster", "Hunter", "Gregory", "Carr", "Lowe", "Page", "Marsh", "Riley", "Dunn", "Woods", "Parsons", "Berry", "Stone", "Reid", "Holland", "Hawkins", "Harding", "Porter", "Robertson", "Newton", "Oliver", "Reed", "Kennedy", "Williamson", "Bird", "Gardner", "Shah", "Dean", "Lane", "Cooke", "Bates", "Henderson", "Parry", "Burgess", "Bishop", "Walton", "Burns", "Nicholson", "Shepherd", "Ross", "Cross", "Long", "Freeman", "Warren", "Nicholls", "Hamilton", "Byrne", "Sutton", "Mcdonald", "Yates", "Hodgson", "Robson", "Curtis", "Hopkins", "O'connor"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var male = exports.male = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Donald", "Mark", "Paul", "Steven", "George", "Kenneth", "Andrew", "Joshua", "Edward", "Brian", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Gary", "Jacob", "Nicholas", "Eric", "Stephen", "Jonathan", "Larry", "Scott", "Frank", "Justin", "Brandon", "Raymond", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Alexander", "Dennis", "Jerry", "Tyler", "Aaron", "Henry", "Douglas", "Peter", "Jose", "Adam", "Zachary", "Walter", "Nathan", "Harold", "Kyle", "Carl", "Arthur", "Gerald", "Roger", "Keith", "Jeremy", "Lawrence", "Terry", "Sean", "Albert", "Joe", "Christian", "Austin", "Willie", "Jesse", "Ethan", "Billy", "Bruce", "Bryan", "Ralph", "Roy", "Jordan", "Eugene", "Wayne", "Louis", "Dylan", "Alan", "Juan", "Noah", "Russell", "Harry", "Randy", "Philip", "Vincent", "Gabriel", "Bobby", "Johnny", "Howard"];
	var female = exports.female = ["Mary", "Patricia", "Jennifer", "Elizabeth", "Linda", "Barbara", "Susan", "Jessica", "Margaret", "Sarah", "Karen", "Nancy", "Betty", "Dorothy", "Lisa", "Sandra", "Ashley", "Kimberly", "Donna", "Carol", "Michelle", "Emily", "Helen", "Amanda", "Melissa", "Deborah", "Stephanie", "Laura", "Rebecca", "Sharon", "Cynthia", "Kathleen", "Shirley", "Amy", "Anna", "Angela", "Ruth", "Brenda", "Pamela", "Virginia", "Katherine", "Nicole", "Catherine", "Christine", "Samantha", "Debra", "Janet", "Carolyn", "Rachel", "Heather", "Maria", "Diane", "Emma", "Julie", "Joyce", "Frances", "Evelyn", "Joan", "Christina", "Kelly", "Martha", "Lauren", "Victoria", "Judith", "Cheryl", "Megan", "Alice", "Ann", "Jean", "Doris", "Andrea", "Marie", "Kathryn", "Jacqueline", "Gloria", "Teresa", "Hannah", "Sara", "Janice", "Julia", "Olivia", "Grace", "Rose", "Theresa", "Judy", "Beverly", "Denise", "Marilyn", "Amber", "Danielle", "Brittany", "Madison", "Diana", "Jane", "Lori", "Mildred", "Tiffany", "Natalie", "Abigail", "Kathy"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var location = exports.location = {
	    countries: ["Afghanistan", "Akrotiri", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Islands", "Australia", "Austria", "Azerbaijan", "Bahamas, The", "Bahrain", "Bangladesh", "Barbados", "Bassas da India", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Coral Sea Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dhekelia", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jersey", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Navassa Island", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paracel Islands", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tromelin Island", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wake Island", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"],
	    countryCodes: ["AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BV", "BR", "VG", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "HK", "MO", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VI", "WF", "EH", "YE", "ZM", "ZW"],
	    roadTypes: ['Road', 'Street', 'Boulevard', 'Lane', 'Drive', 'Way', 'Court', 'Plaza', 'Terrace', 'Place', 'Trail', 'Highway', 'Motorway', 'Interstate', 'Turnpike', 'Freeway', 'Parkway', 'Circuit', 'Garden', 'View', 'Byway', 'Cove', 'Crossing', 'Alley', 'Point', 'Pike', 'Square', 'Walk', 'Grove', 'Driveway', 'Trace', 'Circle', 'Park', 'Branch']
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var text = exports.text = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Duis", "venenatis", "non", "sapien", "sed", "rhoncus", "Ut", "sagittis", "dictum", "dignissim", "Proin", "iaculis", "egestas", "tortor", "vel", "venenatis", "turpis", "luctus", "sodales", "Praesent", "ullamcorper", "maximus", "arcu", "in", "tincidunt", "Phasellus", "sagittis", "ex", "et", "tincidunt", "interdum", "Pellentesque", "a", "accumsan", "diam", "Maecenas", "nisi", "justo", "laoreet", "non", "velit", "et", "placerat", "molestie", "nisi", "Integer", "consectetur", "pellentesque", "sem", "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Donec", "ut", "blandit", "dui", "Nunc", "ultricies", "odio", "quis", "varius", "gravida", "felis", "nisi", "vehicula", "elit", "vel", "porttitor", "nibh", "urna", "non", "nulla", "Morbi", "venenatis", "ut", "tortor", "quis", "luctus", "Phasellus", "varius", "odio", "lectus", "ut", "auctor", "lectus", "cursus", "at", "Curabitur", "gravida", "massa", "vel", "orci", "dignissim", "eget", "varius", "elit", "blandit", "In", "ut", "diam", "ante", "Duis", "leo", "dolor", "sollicitudin", "nec", "massa", "vitae", "scelerisque", "venenatis", "velit", "Phasellus", "sit", "amet", "nunc", "condimentum", "condimentum", "purus", "in", "accumsan", "neque", "Vivamus", "condimentum", "arcu", "ex", "sit", "amet", "blandit", "eros", "eleifend", "in", "Vestibulum", "lacinia", "ex", "aliquet", "suscipit", "egestas", "In", "in", "nisl", "nec", "felis", "facilisis", "maximus", "Morbi", "fermentum", "odio", "varius", "finibus", "dui", "sit", "amet", "finibus", "odio", "Morbi", "quis", "purus", "pretium", "bibendum", "lacus", "a", "molestie", "tellus", "Donec", "enim", "nulla", "porttitor", "in", "efficitur", "viverra", "commodo", "feugiat", "ante", "Fusce", "id", "ornare", "risus", "Etiam", "volutpat", "elit", "diam", "vel", "aliquam", "velit", "finibus", "quis", "Cras"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NO_DATASET_FOUND = NO_DATASET_FOUND;
	exports.INVALID_TEMPLATE = INVALID_TEMPLATE;
	exports.NO_FUNCTION_FOUND_IN_TEMPLATE = NO_FUNCTION_FOUND_IN_TEMPLATE;
	exports.NO_LOCATION_FOUND = NO_LOCATION_FOUND;
	exports.NO_TEXT_FOUND = NO_TEXT_FOUND;
	function NO_DATASET_FOUND(loc) {
	    return new ReferenceError('No dataset found for ' + loc);
	}
	
	function INVALID_TEMPLATE(template) {
	    return new Error('The provided template is invalid \n ' + template);
	}
	
	function NO_FUNCTION_FOUND_IN_TEMPLATE(functionName, template) {
	    return new ReferenceError('No related function found for ' + functionName + ' in template ' + template);
	}
	
	function NO_LOCATION_FOUND() {
	    return new ReferenceError('No location defined for this locale');
	}
	
	function NO_TEXT_FOUND() {
	    return new ReferenceError('No text defined for this locale');
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ipv = __webpack_require__(11);
	
	Object.keys(_ipv).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ipv[key];
	    }
	  });
	});
	
	var _ipv2 = __webpack_require__(14);
	
	Object.keys(_ipv2).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ipv2[key];
	    }
	  });
	});
	
	var _email = __webpack_require__(15);
	
	Object.keys(_email).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _email[key];
	    }
	  });
	});
	
	var _url = __webpack_require__(18);
	
	Object.keys(_url).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _url[key];
	    }
	  });
	});
	
	var _image = __webpack_require__(19);
	
	Object.keys(_image).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _image[key];
	    }
	  });
	});
	
	var _tag = __webpack_require__(20);
	
	Object.keys(_tag).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _tag[key];
	    }
	  });
	});
	
	var _color = __webpack_require__(22);
	
	Object.keys(_color).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _color[key];
	    }
	  });
	});
	
	var _string = __webpack_require__(16);
	
	Object.keys(_string).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _string[key];
	    }
	  });
	});
	
	var _integer = __webpack_require__(23);
	
	Object.keys(_integer).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _integer[key];
	    }
	  });
	});
	
	var _float = __webpack_require__(25);
	
	Object.keys(_float).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _float[key];
	    }
	  });
	});
	
	var _boolean = __webpack_require__(26);
	
	Object.keys(_boolean).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _boolean[key];
	    }
	  });
	});
	
	var _uuid = __webpack_require__(27);
	
	Object.keys(_uuid).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _uuid[key];
	    }
	  });
	});
	
	var _hash = __webpack_require__(28);
	
	Object.keys(_hash).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _hash[key];
	    }
	  });
	});
	
	var _md = __webpack_require__(29);
	
	Object.keys(_md).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _md[key];
	    }
	  });
	});
	
	var _serial = __webpack_require__(30);
	
	Object.keys(_serial).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _serial[key];
	    }
	  });
	});
	
	var _name = __webpack_require__(31);
	
	Object.keys(_name).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _name[key];
	    }
	  });
	});
	
	var _firstName = __webpack_require__(32);
	
	Object.keys(_firstName).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _firstName[key];
	    }
	  });
	});
	
	var _lastName = __webpack_require__(33);
	
	Object.keys(_lastName).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _lastName[key];
	    }
	  });
	});
	
	var _gender = __webpack_require__(34);
	
	Object.keys(_gender).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _gender[key];
	    }
	  });
	});
	
	var _phone = __webpack_require__(35);
	
	Object.keys(_phone).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _phone[key];
	    }
	  });
	});
	
	var _street = __webpack_require__(36);
	
	Object.keys(_street).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _street[key];
	    }
	  });
	});
	
	var _country = __webpack_require__(37);
	
	Object.keys(_country).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _country[key];
	    }
	  });
	});
	
	var _address = __webpack_require__(38);
	
	Object.keys(_address).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _address[key];
	    }
	  });
	});
	
	var _identicon = __webpack_require__(39);
	
	Object.keys(_identicon).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _identicon[key];
	    }
	  });
	});
	
	var _date = __webpack_require__(42);
	
	Object.keys(_date).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _date[key];
	    }
	  });
	});
	
	var _dateIn = __webpack_require__(43);
	
	Object.keys(_dateIn).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dateIn[key];
	    }
	  });
	});
	
	var _domain = __webpack_require__(17);
	
	Object.keys(_domain).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _domain[key];
	    }
	  });
	});
	
	var _words = __webpack_require__(21);
	
	Object.keys(_words).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _words[key];
	    }
	  });
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ipv4 = ipv4;
	
	var _random = __webpack_require__(12);
	
	function ipv4() {
	    return (0, _random.number)(0, 255) + '.' + (0, _random.number)(0, 255) + '.' + (0, _random.number)(0, 255) + '.' + (0, _random.number)(0, 255);
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pick = pick;
	exports.real = real;
	exports.number = number;
	exports.substring = substring;
	
	var _randomJs = __webpack_require__(13);
	
	var Random = _interopRequireWildcard(_randomJs);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var engine = Random.engines.nativeMath;
	
	function pick(array, pickNum) {
	    return pickNum === undefined ? Random.pick(engine, array) : Random.sample(engine, array, parseInt(pickNum, 10));
	}
	
	function real(precision) {
	    return parseFloat(Random.real(0, 1, false)(engine).toFixed(precision || 2));
	}
	
	function number(min, max) {
	    return Random.integer(min || 0, max || 1)(engine);
	}
	
	function substring(string, length) {
	    return Random.string(string)(engine, length);
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*jshint eqnull:true*/
	(function (root) {
	  "use strict";
	
	  var GLOBAL_KEY = "Random";
	
	  var imul = (typeof Math.imul !== "function" || Math.imul(0xffffffff, 5) !== -5 ?
	    function (a, b) {
	      var ah = (a >>> 16) & 0xffff;
	      var al = a & 0xffff;
	      var bh = (b >>> 16) & 0xffff;
	      var bl = b & 0xffff;
	      // the shift by 0 fixes the sign on the high part
	      // the final |0 converts the unsigned value into a signed value
	      return (al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0;
	    } :
	    Math.imul);
	
	  var stringRepeat = (typeof String.prototype.repeat === "function" && "x".repeat(3) === "xxx" ?
	    function (x, y) {
	      return x.repeat(y);
	    } : function (pattern, count) {
	      var result = "";
	      while (count > 0) {
	        if (count & 1) {
	          result += pattern;
	        }
	        count >>= 1;
	        pattern += pattern;
	      }
	      return result;
	    });
	
	  function Random(engine) {
	    if (!(this instanceof Random)) {
	      return new Random(engine);
	    }
	
	    if (engine == null) {
	      engine = Random.engines.nativeMath;
	    } else if (typeof engine !== "function") {
	      throw new TypeError("Expected engine to be a function, got " + typeof engine);
	    }
	    this.engine = engine;
	  }
	  var proto = Random.prototype;
	
	  Random.engines = {
	    nativeMath: function () {
	      return (Math.random() * 0x100000000) | 0;
	    },
	    mt19937: (function (Int32Array) {
	      // http://en.wikipedia.org/wiki/Mersenne_twister
	      function refreshData(data) {
	        var k = 0;
	        var tmp = 0;
	        for (;
	          (k | 0) < 227; k = (k + 1) | 0) {
	          tmp = (data[k] & 0x80000000) | (data[(k + 1) | 0] & 0x7fffffff);
	          data[k] = data[(k + 397) | 0] ^ (tmp >>> 1) ^ ((tmp & 0x1) ? 0x9908b0df : 0);
	        }
	
	        for (;
	          (k | 0) < 623; k = (k + 1) | 0) {
	          tmp = (data[k] & 0x80000000) | (data[(k + 1) | 0] & 0x7fffffff);
	          data[k] = data[(k - 227) | 0] ^ (tmp >>> 1) ^ ((tmp & 0x1) ? 0x9908b0df : 0);
	        }
	
	        tmp = (data[623] & 0x80000000) | (data[0] & 0x7fffffff);
	        data[623] = data[396] ^ (tmp >>> 1) ^ ((tmp & 0x1) ? 0x9908b0df : 0);
	      }
	
	      function temper(value) {
	        value ^= value >>> 11;
	        value ^= (value << 7) & 0x9d2c5680;
	        value ^= (value << 15) & 0xefc60000;
	        return value ^ (value >>> 18);
	      }
	
	      function seedWithArray(data, source) {
	        var i = 1;
	        var j = 0;
	        var sourceLength = source.length;
	        var k = Math.max(sourceLength, 624) | 0;
	        var previous = data[0] | 0;
	        for (;
	          (k | 0) > 0; --k) {
	          data[i] = previous = ((data[i] ^ imul((previous ^ (previous >>> 30)), 0x0019660d)) + (source[j] | 0) + (j | 0)) | 0;
	          i = (i + 1) | 0;
	          ++j;
	          if ((i | 0) > 623) {
	            data[0] = data[623];
	            i = 1;
	          }
	          if (j >= sourceLength) {
	            j = 0;
	          }
	        }
	        for (k = 623;
	          (k | 0) > 0; --k) {
	          data[i] = previous = ((data[i] ^ imul((previous ^ (previous >>> 30)), 0x5d588b65)) - i) | 0;
	          i = (i + 1) | 0;
	          if ((i | 0) > 623) {
	            data[0] = data[623];
	            i = 1;
	          }
	        }
	        data[0] = 0x80000000;
	      }
	
	      function mt19937() {
	        var data = new Int32Array(624);
	        var index = 0;
	        var uses = 0;
	
	        function next() {
	          if ((index | 0) >= 624) {
	            refreshData(data);
	            index = 0;
	          }
	
	          var value = data[index];
	          index = (index + 1) | 0;
	          uses += 1;
	          return temper(value) | 0;
	        }
	        next.getUseCount = function() {
	          return uses;
	        };
	        next.discard = function (count) {
	          uses += count;
	          if ((index | 0) >= 624) {
	            refreshData(data);
	            index = 0;
	          }
	          while ((count - index) > 624) {
	            count -= 624 - index;
	            refreshData(data);
	            index = 0;
	          }
	          index = (index + count) | 0;
	          return next;
	        };
	        next.seed = function (initial) {
	          var previous = 0;
	          data[0] = previous = initial | 0;
	
	          for (var i = 1; i < 624; i = (i + 1) | 0) {
	            data[i] = previous = (imul((previous ^ (previous >>> 30)), 0x6c078965) + i) | 0;
	          }
	          index = 624;
	          uses = 0;
	          return next;
	        };
	        next.seedWithArray = function (source) {
	          next.seed(0x012bd6aa);
	          seedWithArray(data, source);
	          return next;
	        };
	        next.autoSeed = function () {
	          return next.seedWithArray(Random.generateEntropyArray());
	        };
	        return next;
	      }
	
	      return mt19937;
	    }(typeof Int32Array === "function" ? Int32Array : Array)),
	    browserCrypto: (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function" && typeof Int32Array === "function") ? (function () {
	      var data = null;
	      var index = 128;
	
	      return function () {
	        if (index >= 128) {
	          if (data === null) {
	            data = new Int32Array(128);
	          }
	          crypto.getRandomValues(data);
	          index = 0;
	        }
	
	        return data[index++] | 0;
	      };
	    }()) : null
	  };
	
	  Random.generateEntropyArray = function () {
	    var array = [];
	    var engine = Random.engines.nativeMath;
	    for (var i = 0; i < 16; ++i) {
	      array[i] = engine() | 0;
	    }
	    array.push(new Date().getTime() | 0);
	    return array;
	  };
	
	  function returnValue(value) {
	    return function () {
	      return value;
	    };
	  }
	
	  // [-0x80000000, 0x7fffffff]
	  Random.int32 = function (engine) {
	    return engine() | 0;
	  };
	  proto.int32 = function () {
	    return Random.int32(this.engine);
	  };
	
	  // [0, 0xffffffff]
	  Random.uint32 = function (engine) {
	    return engine() >>> 0;
	  };
	  proto.uint32 = function () {
	    return Random.uint32(this.engine);
	  };
	
	  // [0, 0x1fffffffffffff]
	  Random.uint53 = function (engine) {
	    var high = engine() & 0x1fffff;
	    var low = engine() >>> 0;
	    return (high * 0x100000000) + low;
	  };
	  proto.uint53 = function () {
	    return Random.uint53(this.engine);
	  };
	
	  // [0, 0x20000000000000]
	  Random.uint53Full = function (engine) {
	    while (true) {
	      var high = engine() | 0;
	      if (high & 0x200000) {
	        if ((high & 0x3fffff) === 0x200000 && (engine() | 0) === 0) {
	          return 0x20000000000000;
	        }
	      } else {
	        var low = engine() >>> 0;
	        return ((high & 0x1fffff) * 0x100000000) + low;
	      }
	    }
	  };
	  proto.uint53Full = function () {
	    return Random.uint53Full(this.engine);
	  };
	
	  // [-0x20000000000000, 0x1fffffffffffff]
	  Random.int53 = function (engine) {
	    var high = engine() | 0;
	    var low = engine() >>> 0;
	    return ((high & 0x1fffff) * 0x100000000) + low + (high & 0x200000 ? -0x20000000000000 : 0);
	  };
	  proto.int53 = function () {
	    return Random.int53(this.engine);
	  };
	
	  // [-0x20000000000000, 0x20000000000000]
	  Random.int53Full = function (engine) {
	    while (true) {
	      var high = engine() | 0;
	      if (high & 0x400000) {
	        if ((high & 0x7fffff) === 0x400000 && (engine() | 0) === 0) {
	          return 0x20000000000000;
	        }
	      } else {
	        var low = engine() >>> 0;
	        return ((high & 0x1fffff) * 0x100000000) + low + (high & 0x200000 ? -0x20000000000000 : 0);
	      }
	    }
	  };
	  proto.int53Full = function () {
	    return Random.int53Full(this.engine);
	  };
	
	  function add(generate, addend) {
	    if (addend === 0) {
	      return generate;
	    } else {
	      return function (engine) {
	        return generate(engine) + addend;
	      };
	    }
	  }
	
	  Random.integer = (function () {
	    function isPowerOfTwoMinusOne(value) {
	      return ((value + 1) & value) === 0;
	    }
	
	    function bitmask(masking) {
	      return function (engine) {
	        return engine() & masking;
	      };
	    }
	
	    function downscaleToLoopCheckedRange(range) {
	      var extendedRange = range + 1;
	      var maximum = extendedRange * Math.floor(0x100000000 / extendedRange);
	      return function (engine) {
	        var value = 0;
	        do {
	          value = engine() >>> 0;
	        } while (value >= maximum);
	        return value % extendedRange;
	      };
	    }
	
	    function downscaleToRange(range) {
	      if (isPowerOfTwoMinusOne(range)) {
	        return bitmask(range);
	      } else {
	        return downscaleToLoopCheckedRange(range);
	      }
	    }
	
	    function isEvenlyDivisibleByMaxInt32(value) {
	      return (value | 0) === 0;
	    }
	
	    function upscaleWithHighMasking(masking) {
	      return function (engine) {
	        var high = engine() & masking;
	        var low = engine() >>> 0;
	        return (high * 0x100000000) + low;
	      };
	    }
	
	    function upscaleToLoopCheckedRange(extendedRange) {
	      var maximum = extendedRange * Math.floor(0x20000000000000 / extendedRange);
	      return function (engine) {
	        var ret = 0;
	        do {
	          var high = engine() & 0x1fffff;
	          var low = engine() >>> 0;
	          ret = (high * 0x100000000) + low;
	        } while (ret >= maximum);
	        return ret % extendedRange;
	      };
	    }
	
	    function upscaleWithinU53(range) {
	      var extendedRange = range + 1;
	      if (isEvenlyDivisibleByMaxInt32(extendedRange)) {
	        var highRange = ((extendedRange / 0x100000000) | 0) - 1;
	        if (isPowerOfTwoMinusOne(highRange)) {
	          return upscaleWithHighMasking(highRange);
	        }
	      }
	      return upscaleToLoopCheckedRange(extendedRange);
	    }
	
	    function upscaleWithinI53AndLoopCheck(min, max) {
	      return function (engine) {
	        var ret = 0;
	        do {
	          var high = engine() | 0;
	          var low = engine() >>> 0;
	          ret = ((high & 0x1fffff) * 0x100000000) + low + (high & 0x200000 ? -0x20000000000000 : 0);
	        } while (ret < min || ret > max);
	        return ret;
	      };
	    }
	
	    return function (min, max) {
	      min = Math.floor(min);
	      max = Math.floor(max);
	      if (min < -0x20000000000000 || !isFinite(min)) {
	        throw new RangeError("Expected min to be at least " + (-0x20000000000000));
	      } else if (max > 0x20000000000000 || !isFinite(max)) {
	        throw new RangeError("Expected max to be at most " + 0x20000000000000);
	      }
	
	      var range = max - min;
	      if (range <= 0 || !isFinite(range)) {
	        return returnValue(min);
	      } else if (range === 0xffffffff) {
	        if (min === 0) {
	          return Random.uint32;
	        } else {
	          return add(Random.int32, min + 0x80000000);
	        }
	      } else if (range < 0xffffffff) {
	        return add(downscaleToRange(range), min);
	      } else if (range === 0x1fffffffffffff) {
	        return add(Random.uint53, min);
	      } else if (range < 0x1fffffffffffff) {
	        return add(upscaleWithinU53(range), min);
	      } else if (max - 1 - min === 0x1fffffffffffff) {
	        return add(Random.uint53Full, min);
	      } else if (min === -0x20000000000000 && max === 0x20000000000000) {
	        return Random.int53Full;
	      } else if (min === -0x20000000000000 && max === 0x1fffffffffffff) {
	        return Random.int53;
	      } else if (min === -0x1fffffffffffff && max === 0x20000000000000) {
	        return add(Random.int53, 1);
	      } else if (max === 0x20000000000000) {
	        return add(upscaleWithinI53AndLoopCheck(min - 1, max - 1), 1);
	      } else {
	        return upscaleWithinI53AndLoopCheck(min, max);
	      }
	    };
	  }());
	  proto.integer = function (min, max) {
	    return Random.integer(min, max)(this.engine);
	  };
	
	  // [0, 1] (floating point)
	  Random.realZeroToOneInclusive = function (engine) {
	    return Random.uint53Full(engine) / 0x20000000000000;
	  };
	  proto.realZeroToOneInclusive = function () {
	    return Random.realZeroToOneInclusive(this.engine);
	  };
	
	  // [0, 1) (floating point)
	  Random.realZeroToOneExclusive = function (engine) {
	    return Random.uint53(engine) / 0x20000000000000;
	  };
	  proto.realZeroToOneExclusive = function () {
	    return Random.realZeroToOneExclusive(this.engine);
	  };
	
	  Random.real = (function () {
	    function multiply(generate, multiplier) {
	      if (multiplier === 1) {
	        return generate;
	      } else if (multiplier === 0) {
	        return function () {
	          return 0;
	        };
	      } else {
	        return function (engine) {
	          return generate(engine) * multiplier;
	        };
	      }
	    }
	
	    return function (left, right, inclusive) {
	      if (!isFinite(left)) {
	        throw new RangeError("Expected left to be a finite number");
	      } else if (!isFinite(right)) {
	        throw new RangeError("Expected right to be a finite number");
	      }
	      return add(
	        multiply(
	          inclusive ? Random.realZeroToOneInclusive : Random.realZeroToOneExclusive,
	          right - left),
	        left);
	    };
	  }());
	  proto.real = function (min, max, inclusive) {
	    return Random.real(min, max, inclusive)(this.engine);
	  };
	
	  Random.bool = (function () {
	    function isLeastBitTrue(engine) {
	      return (engine() & 1) === 1;
	    }
	
	    function lessThan(generate, value) {
	      return function (engine) {
	        return generate(engine) < value;
	      };
	    }
	
	    function probability(percentage) {
	      if (percentage <= 0) {
	        return returnValue(false);
	      } else if (percentage >= 1) {
	        return returnValue(true);
	      } else {
	        var scaled = percentage * 0x100000000;
	        if (scaled % 1 === 0) {
	          return lessThan(Random.int32, (scaled - 0x80000000) | 0);
	        } else {
	          return lessThan(Random.uint53, Math.round(percentage * 0x20000000000000));
	        }
	      }
	    }
	
	    return function (numerator, denominator) {
	      if (denominator == null) {
	        if (numerator == null) {
	          return isLeastBitTrue;
	        }
	        return probability(numerator);
	      } else {
	        if (numerator <= 0) {
	          return returnValue(false);
	        } else if (numerator >= denominator) {
	          return returnValue(true);
	        }
	        return lessThan(Random.integer(0, denominator - 1), numerator);
	      }
	    };
	  }());
	  proto.bool = function (numerator, denominator) {
	    return Random.bool(numerator, denominator)(this.engine);
	  };
	
	  function toInteger(value) {
	    var number = +value;
	    if (number < 0) {
	      return Math.ceil(number);
	    } else {
	      return Math.floor(number);
	    }
	  }
	
	  function convertSliceArgument(value, length) {
	    if (value < 0) {
	      return Math.max(value + length, 0);
	    } else {
	      return Math.min(value, length);
	    }
	  }
	  Random.pick = function (engine, array, begin, end) {
	    var length = array.length;
	    var start = begin == null ? 0 : convertSliceArgument(toInteger(begin), length);
	    var finish = end === void 0 ? length : convertSliceArgument(toInteger(end), length);
	    if (start >= finish) {
	      return void 0;
	    }
	    var distribution = Random.integer(start, finish - 1);
	    return array[distribution(engine)];
	  };
	  proto.pick = function (array, begin, end) {
	    return Random.pick(this.engine, array, begin, end);
	  };
	
	  function returnUndefined() {
	    return void 0;
	  }
	  var slice = Array.prototype.slice;
	  Random.picker = function (array, begin, end) {
	    var clone = slice.call(array, begin, end);
	    if (!clone.length) {
	      return returnUndefined;
	    }
	    var distribution = Random.integer(0, clone.length - 1);
	    return function (engine) {
	      return clone[distribution(engine)];
	    };
	  };
	
	  Random.shuffle = function (engine, array, downTo) {
	    var length = array.length;
	    if (length) {
	      if (downTo == null) {
	        downTo = 0;
	      }
	      for (var i = (length - 1) >>> 0; i > downTo; --i) {
	        var distribution = Random.integer(0, i);
	        var j = distribution(engine);
	        if (i !== j) {
	          var tmp = array[i];
	          array[i] = array[j];
	          array[j] = tmp;
	        }
	      }
	    }
	    return array;
	  };
	  proto.shuffle = function (array) {
	    return Random.shuffle(this.engine, array);
	  };
	
	  Random.sample = function (engine, population, sampleSize) {
	    if (sampleSize < 0 || sampleSize > population.length || !isFinite(sampleSize)) {
	      throw new RangeError("Expected sampleSize to be within 0 and the length of the population");
	    }
	
	    if (sampleSize === 0) {
	      return [];
	    }
	
	    var clone = slice.call(population);
	    var length = clone.length;
	    if (length === sampleSize) {
	      return Random.shuffle(engine, clone, 0);
	    }
	    var tailLength = length - sampleSize;
	    return Random.shuffle(engine, clone, tailLength - 1).slice(tailLength);
	  };
	  proto.sample = function (population, sampleSize) {
	    return Random.sample(this.engine, population, sampleSize);
	  };
	
	  Random.die = function (sideCount) {
	    return Random.integer(1, sideCount);
	  };
	  proto.die = function (sideCount) {
	    return Random.die(sideCount)(this.engine);
	  };
	
	  Random.dice = function (sideCount, dieCount) {
	    var distribution = Random.die(sideCount);
	    return function (engine) {
	      var result = [];
	      result.length = dieCount;
	      for (var i = 0; i < dieCount; ++i) {
	        result[i] = distribution(engine);
	      }
	      return result;
	    };
	  };
	  proto.dice = function (sideCount, dieCount) {
	    return Random.dice(sideCount, dieCount)(this.engine);
	  };
	
	  // http://en.wikipedia.org/wiki/Universally_unique_identifier
	  Random.uuid4 = (function () {
	    function zeroPad(string, zeroCount) {
	      return stringRepeat("0", zeroCount - string.length) + string;
	    }
	
	    return function (engine) {
	      var a = engine() >>> 0;
	      var b = engine() | 0;
	      var c = engine() | 0;
	      var d = engine() >>> 0;
	
	      return (
	        zeroPad(a.toString(16), 8) +
	        "-" +
	        zeroPad((b & 0xffff).toString(16), 4) +
	        "-" +
	        zeroPad((((b >> 4) & 0x0fff) | 0x4000).toString(16), 4) +
	        "-" +
	        zeroPad(((c & 0x3fff) | 0x8000).toString(16), 4) +
	        "-" +
	        zeroPad(((c >> 4) & 0xffff).toString(16), 4) +
	        zeroPad(d.toString(16), 8));
	    };
	  }());
	  proto.uuid4 = function () {
	    return Random.uuid4(this.engine);
	  };
	
	  Random.string = (function () {
	    // has 2**x chars, for faster uniform distribution
	    var DEFAULT_STRING_POOL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
	
	    return function (pool) {
	      if (pool == null) {
	        pool = DEFAULT_STRING_POOL;
	      }
	
	      var length = pool.length;
	      if (!length) {
	        throw new Error("Expected pool not to be an empty string");
	      }
	
	      var distribution = Random.integer(0, length - 1);
	      return function (engine, length) {
	        var result = "";
	        for (var i = 0; i < length; ++i) {
	          var j = distribution(engine);
	          result += pool.charAt(j);
	        }
	        return result;
	      };
	    };
	  }());
	  proto.string = function (length, pool) {
	    return Random.string(pool)(this.engine, length);
	  };
	
	  Random.hex = (function () {
	    var LOWER_HEX_POOL = "0123456789abcdef";
	    var lowerHex = Random.string(LOWER_HEX_POOL);
	    var upperHex = Random.string(LOWER_HEX_POOL.toUpperCase());
	
	    return function (upper) {
	      if (upper) {
	        return upperHex;
	      } else {
	        return lowerHex;
	      }
	    };
	  }());
	  proto.hex = function (length, upper) {
	    return Random.hex(upper)(this.engine, length);
	  };
	
	  Random.date = function (start, end) {
	    if (!(start instanceof Date)) {
	      throw new TypeError("Expected start to be a Date, got " + typeof start);
	    } else if (!(end instanceof Date)) {
	      throw new TypeError("Expected end to be a Date, got " + typeof end);
	    }
	    var distribution = Random.integer(start.getTime(), end.getTime());
	    return function (engine) {
	      return new Date(distribution(engine));
	    };
	  };
	  proto.date = function (start, end) {
	    return Random.date(start, end)(this.engine);
	  };
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return Random;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module !== "undefined" && typeof require === "function") {
	    module.exports = Random;
	  } else {
	    (function () {
	      var oldGlobal = root[GLOBAL_KEY];
	      Random.noConflict = function () {
	        root[GLOBAL_KEY] = oldGlobal;
	        return this;
	      };
	    }());
	    root[GLOBAL_KEY] = Random;
	  }
	}(this));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ipv6 = ipv6;
	
	var _random = __webpack_require__(12);
	
	function ipv6() {
	    var count = 7;
	    var ipv6 = [];
	    while (count >= 0) {
	        ipv6.push(('' + (0, _random.number)(0, 65535).toString(16)).slice(-4));
	        count--;
	    }
	    return ipv6.join(':').toUpperCase();
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.email = email;
	
	var _string = __webpack_require__(16);
	
	var _domain = __webpack_require__(17);
	
	function email(d) {
	    return (0, _string.string)(10, '[0-9a-zA-Z]') + '@' + (d ? d : (0, _domain.domain)());
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.string = string;
	
	var _random = __webpack_require__(12);
	
	var DEFAULT_STRING_POOL = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+|~-=\\`[]{};\':",./<>?';
	var DEFAULT_FILTER = /[a-zA-Z0-9]/g;
	var DEFAULT_LENGTH = 10;
	
	function string(length, regex) {
	    var r = regex instanceof RegExp ? regex : typeof regex == 'string' ? new RegExp(regex, 'g') : DEFAULT_FILTER;
	
	    var s = '';
	    var m = void 0;
	
	    while ((m = r.exec(DEFAULT_STRING_POOL)) !== null) {
	        if (m.index === r.lastIndex) {
	            r.lastIndex++;
	        }
	        m.forEach(function (match) {
	            s += match;
	        });
	    }
	
	    return (0, _random.substring)(s, length || DEFAULT_LENGTH);
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.domain = domain;
	
	var _string = __webpack_require__(16);
	
	var _random = __webpack_require__(12);
	
	var domains = ['.com', '.net', '.org', '.info', '.biz', '.io'];
	
	function domain() {
	    return (0, _string.string)(5) + (0, _random.pick)(domains);
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.url = url;
	
	var _domain = __webpack_require__(17);
	
	function url() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        host = _ref.host,
	        protocol = _ref.protocol,
	        query = _ref.query,
	        port = _ref.port,
	        hash = _ref.hash,
	        path = _ref.path;
	
	    host = host || (0, _domain.domain)();
	    protocol = protocol || 'http';
	    port = port ? port[0] == ":" ? port : ":" + port : '';
	    hash = hash ? hash[0] == '#' ? hash : '#' + hash : '';
	    path = path ? path[0] == '/' ? path : '/' + path : '';
	
	    var search = [];
	
	    if (query) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = Object.keys(query)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var q = _step.value;
	
	                search.push(q + '=' + encodeURI(query[q]));
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	    }
	
	    return protocol + '://' + host + port + path + hash + (search.length > 0 ? '?' + search.join('&') : '');
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.image = image;
	
	var _string = __webpack_require__(16);
	
	var IMAGE_HREF = 'https://unsplash.it';
	
	function image() {
	    var w = void 0,
	        h = void 0;
	    var id = (0, _string.string)(10, '[a-zA-Z0-9]');
	    if (arguments.length == 0) {
	        w = h = 500;
	    } else if (arguments.length == 1) {
	        w = h = parseInt(arguments.length <= 0 ? undefined : arguments[0], 10);
	    } else {
	        w = parseInt(arguments.length <= 0 ? undefined : arguments[0], 10);
	        h = parseInt(arguments.length <= 1 ? undefined : arguments[1], 10);
	    }
	
	    return IMAGE_HREF + '/' + w + '/' + h + '/?random&id=' + id;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tag = tag;
	
	var _words = __webpack_require__(21);
	
	function tag(symbol) {
	    symbol = symbol || '#';
	    return '' + symbol + (0, _words.words)(1);
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.words = words;
	
	var _config = __webpack_require__(1);
	
	var _random = __webpack_require__(12);
	
	var _errors = __webpack_require__(9);
	
	function words(count) {
	    count = count || 10;
	
	    var dataSet = (0, _config.getDataSet)();
	    if (!dataSet.text) throw (0, _errors.NO_TEXT_FOUND)();
	
	    var w = (0, _random.pick)(dataSet.text, count);
	    return w.join(' ');
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.color = color;
	
	var _random = __webpack_require__(12);
	
	var rgbToHsl = function rgbToHsl(r, g, b) {
	    var min = Math.min(r, g, b),
	        max = Math.max(r, g, b),
	        delta = max - min,
	        h = void 0,
	        s = void 0,
	        v = max;
	
	    v = Math.floor(max / 255 * 100);
	    if (max != 0) s = Math.floor(delta / max * 100);else return [0, 0, 0];
	
	    if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else h = 4 + (r - g) / delta;
	
	    h = Math.floor(h * 60);
	    if (h < 0) h += 360;
	
	    return [h, s, v];
	};
	
	var getHexNumber = function getHexNumber(c) {
	    var hex = c.toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
	};
	
	var rgbToHex = function rgbToHex(r, g, b) {
	    return '#' + (getHexNumber(r) + getHexNumber(g) + getHexNumber(b));
	};
	
	function color(format) {
	    var r = (0, _random.number)(0, 256);
	    var g = (0, _random.number)(0, 256);
	    var b = (0, _random.number)(0, 256);
	
	    switch (format) {
	        case 'rgb':
	            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	        case 'hsl':
	            {
	                var hsl = rgbToHsl(r, g, b);
	                return 'hsl(' + hsl[0] + '%, ' + hsl[1] + '%, ' + hsl[2] + '%)';
	            }
	        case 'hex':
	        default:
	            return rgbToHex(r, g, b);
	    }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.integer = integer;
	
	var _random = __webpack_require__(12);
	
	var _parser = __webpack_require__(24);
	
	function integer() {
	
	    var min = 0,
	        max = 100,
	        format = 10,
	        num = void 0;
	    if (arguments.length == 0) {
	        format = (0, _parser.parseFormat)();
	    } else if (arguments.length == 1) {
	        if (isNaN(arguments.length <= 0 ? undefined : arguments[0])) {
	            format = (0, _parser.parseFormat)(arguments.length <= 0 ? undefined : arguments[0]);
	        } else {
	            max = arguments.length <= 0 ? undefined : arguments[0];
	        }
	    } else {
	        max = arguments.length <= 1 ? undefined : arguments[1];min = arguments.length <= 0 ? undefined : arguments[0];format = (0, _parser.parseFormat)(arguments.length <= 2 ? undefined : arguments[2]);
	    }
	
	    num = (0, _random.number)(min, max);
	
	    return format == 10 ? num : num.toString(format);
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mapStrTypes = mapStrTypes;
	exports.parseFormat = parseFormat;
	exports.tokenize = tokenize;
	var convertStr = function convertStr(str) {
	    if (str == null) return str;
	    if (str === 'true') return true;
	    if (str === 'false') return false;
	    if (!isNaN(str)) return +str;
	    if (/".*"/.test(str)) return str.substring(1, str.length - 1);
	    return { $$scopeVar: true, name: str };
	};
	
	function mapStrTypes(str) {
	    if (str == null) return str;
	    if (str === 'true') return true;
	    if (str === 'false') return false;
	    if (!isNaN(str)) return +str;
	    return str.toString();
	}
	
	function parseFormat(formatStr) {
	    if (formatStr == undefined) return 10;
	    switch (formatStr) {
	        case 'hex':
	            return 16;
	        case 'oct':
	            return 8;
	        case 'bin':
	            return 2;
	        default:
	            return parseInt(formatStr, 10);
	    }
	};
	
	function tokenize(template) {
	    var regex = /\{\{(.*?)}}/g;
	    var commands = [];
	    var m = void 0;
	    var p = 0;
	
	    while ((m = regex.exec(template)) !== null) {
	        if (m.index === regex.lastIndex) {
	            regex.lastIndex++;
	        }
	        if (m[1]) {
	            if (p != m.index) commands.push({
	                value: template.substring(p, m.index),
	                skip: true
	            });
	            p = m.index + m[0].length;
	            var match = m[1];
	            var command = match.trim();
	            var name = /^(\w*)/.exec(command);
	            var params = /\((.*?)\)/.exec(command);
	            commands.push({
	                name: name ? name[1] : '',
	                parameters: params ? (params[1] || '').trim().split(',').map(function (p) {
	                    return convertStr(p.trim());
	                }) : []
	            });
	        }
	    }
	
	    if (p != template.length) commands.push({
	        value: template.substring(p),
	        skip: true
	    });
	
	    return { $$bsToken: true, commands: commands };
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.float = float;
	
	var _random = __webpack_require__(12);
	
	var _parser = __webpack_require__(24);
	
	function float() {
	
	    var pre = void 0,
	        format = void 0;
	    if (arguments.length == 0) {
	        pre = 2;format = 10;
	    } else if (arguments.length == 1) {
	        pre = isNaN(arguments.length <= 0 ? undefined : arguments[0]) ? 2 : parseInt(arguments.length <= 0 ? undefined : arguments[0], 10);
	        format = 10;
	    } else {
	        pre = parseInt(arguments.length <= 0 ? undefined : arguments[0], 10);format = (0, _parser.parseFormat)(arguments.length <= 1 ? undefined : arguments[1]);
	    }
	
	    return format == 10 ? (0, _random.real)(pre) : (0, _random.real)(pre).toString(format);
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.boolean = boolean;
	
	var _random = __webpack_require__(12);
	
	function boolean() {
	    return (0, _random.pick)([true, false]);
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.uuid = uuid;
	function uuid() {
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	        var r = Math.random() * 16 | 0,
	            v = c == 'x' ? r : r & 0x3 | 0x8;
	        return v.toString(16);
	    });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.hash = hash;
	
	var _string = __webpack_require__(16);
	
	function hash(str) {
	    str = str || (0, _string.string)(25, '[0-9a-zA-Z]');
	    var hash = 0,
	        i = void 0,
	        chr = void 0,
	        len = void 0;
	
	    for (i = 0, len = str.length; i < len; i++) {
	        chr = str.charCodeAt(i);
	        hash = (hash << 5) - hash + chr;
	        hash |= 0;
	    }
	    return hash;
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.md5 = md5;
	
	var _string = __webpack_require__(16);
	
	/*
	 * http://www.myersdaily.org/joseph/javascript/md5-text.html
	 */
	var md5cycle = function md5cycle(x, k) {
	    var a = x[0],
	        b = x[1],
	        c = x[2],
	        d = x[3];
	
	    a = ff(a, b, c, d, k[0], 7, -680876936);
	    d = ff(d, a, b, c, k[1], 12, -389564586);
	    c = ff(c, d, a, b, k[2], 17, 606105819);
	    b = ff(b, c, d, a, k[3], 22, -1044525330);
	    a = ff(a, b, c, d, k[4], 7, -176418897);
	    d = ff(d, a, b, c, k[5], 12, 1200080426);
	    c = ff(c, d, a, b, k[6], 17, -1473231341);
	    b = ff(b, c, d, a, k[7], 22, -45705983);
	    a = ff(a, b, c, d, k[8], 7, 1770035416);
	    d = ff(d, a, b, c, k[9], 12, -1958414417);
	    c = ff(c, d, a, b, k[10], 17, -42063);
	    b = ff(b, c, d, a, k[11], 22, -1990404162);
	    a = ff(a, b, c, d, k[12], 7, 1804603682);
	    d = ff(d, a, b, c, k[13], 12, -40341101);
	    c = ff(c, d, a, b, k[14], 17, -1502002290);
	    b = ff(b, c, d, a, k[15], 22, 1236535329);
	
	    a = gg(a, b, c, d, k[1], 5, -165796510);
	    d = gg(d, a, b, c, k[6], 9, -1069501632);
	    c = gg(c, d, a, b, k[11], 14, 643717713);
	    b = gg(b, c, d, a, k[0], 20, -373897302);
	    a = gg(a, b, c, d, k[5], 5, -701558691);
	    d = gg(d, a, b, c, k[10], 9, 38016083);
	    c = gg(c, d, a, b, k[15], 14, -660478335);
	    b = gg(b, c, d, a, k[4], 20, -405537848);
	    a = gg(a, b, c, d, k[9], 5, 568446438);
	    d = gg(d, a, b, c, k[14], 9, -1019803690);
	    c = gg(c, d, a, b, k[3], 14, -187363961);
	    b = gg(b, c, d, a, k[8], 20, 1163531501);
	    a = gg(a, b, c, d, k[13], 5, -1444681467);
	    d = gg(d, a, b, c, k[2], 9, -51403784);
	    c = gg(c, d, a, b, k[7], 14, 1735328473);
	    b = gg(b, c, d, a, k[12], 20, -1926607734);
	
	    a = hh(a, b, c, d, k[5], 4, -378558);
	    d = hh(d, a, b, c, k[8], 11, -2022574463);
	    c = hh(c, d, a, b, k[11], 16, 1839030562);
	    b = hh(b, c, d, a, k[14], 23, -35309556);
	    a = hh(a, b, c, d, k[1], 4, -1530992060);
	    d = hh(d, a, b, c, k[4], 11, 1272893353);
	    c = hh(c, d, a, b, k[7], 16, -155497632);
	    b = hh(b, c, d, a, k[10], 23, -1094730640);
	    a = hh(a, b, c, d, k[13], 4, 681279174);
	    d = hh(d, a, b, c, k[0], 11, -358537222);
	    c = hh(c, d, a, b, k[3], 16, -722521979);
	    b = hh(b, c, d, a, k[6], 23, 76029189);
	    a = hh(a, b, c, d, k[9], 4, -640364487);
	    d = hh(d, a, b, c, k[12], 11, -421815835);
	    c = hh(c, d, a, b, k[15], 16, 530742520);
	    b = hh(b, c, d, a, k[2], 23, -995338651);
	
	    a = ii(a, b, c, d, k[0], 6, -198630844);
	    d = ii(d, a, b, c, k[7], 10, 1126891415);
	    c = ii(c, d, a, b, k[14], 15, -1416354905);
	    b = ii(b, c, d, a, k[5], 21, -57434055);
	    a = ii(a, b, c, d, k[12], 6, 1700485571);
	    d = ii(d, a, b, c, k[3], 10, -1894986606);
	    c = ii(c, d, a, b, k[10], 15, -1051523);
	    b = ii(b, c, d, a, k[1], 21, -2054922799);
	    a = ii(a, b, c, d, k[8], 6, 1873313359);
	    d = ii(d, a, b, c, k[15], 10, -30611744);
	    c = ii(c, d, a, b, k[6], 15, -1560198380);
	    b = ii(b, c, d, a, k[13], 21, 1309151649);
	    a = ii(a, b, c, d, k[4], 6, -145523070);
	    d = ii(d, a, b, c, k[11], 10, -1120210379);
	    c = ii(c, d, a, b, k[2], 15, 718787259);
	    b = ii(b, c, d, a, k[9], 21, -343485551);
	
	    x[0] = add32(a, x[0]);
	    x[1] = add32(b, x[1]);
	    x[2] = add32(c, x[2]);
	    x[3] = add32(d, x[3]);
	};
	
	var cmn = function cmn(q, a, b, x, s, t) {
	    a = add32(add32(a, q), add32(x, t));
	    return add32(a << s | a >>> 32 - s, b);
	};
	
	var ff = function ff(a, b, c, d, x, s, t) {
	    return cmn(b & c | ~b & d, a, b, x, s, t);
	};
	
	var gg = function gg(a, b, c, d, x, s, t) {
	    return cmn(b & d | c & ~d, a, b, x, s, t);
	};
	
	var hh = function hh(a, b, c, d, x, s, t) {
	    return cmn(b ^ c ^ d, a, b, x, s, t);
	};
	
	var ii = function ii(a, b, c, d, x, s, t) {
	    return cmn(c ^ (b | ~d), a, b, x, s, t);
	};
	
	var md51 = function md51(s) {
	    var txt = '',
	        n = s.length,
	        state = [1732584193, -271733879, -1732584194, 271733878],
	        i = void 0;
	    for (i = 64; i <= s.length; i += 64) {
	        md5cycle(state, md5blk(s.substring(i - 64, i)));
	    }
	    s = s.substring(i - 64);
	    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	    for (i = 0; i < s.length; i++) {
	        tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
	    }tail[i >> 2] |= 0x80 << (i % 4 << 3);
	    if (i > 55) {
	        md5cycle(state, tail);
	        for (i = 0; i < 16; i++) {
	            tail[i] = 0;
	        }
	    }
	    tail[14] = n * 8;
	    md5cycle(state, tail);
	    return state;
	};
	
	var md5blk = function md5blk(s) {
	    /* I figured global was faster.   */
	    var md5blks = [],
	        i = void 0; /* Andy King said do it this way. */
	    for (i = 0; i < 64; i += 4) {
	        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
	    }
	    return md5blks;
	};
	
	var hex_chr = '0123456789abcdef'.split('');
	
	var rhex = function rhex(n) {
	    var s = '',
	        j = 0;
	    for (; j < 4; j++) {
	        s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
	    }return s;
	};
	
	var hex = function hex(x) {
	    for (var i = 0; i < x.length; i++) {
	        x[i] = rhex(x[i]);
	    }return x.join('');
	};
	
	var add32 = function add32(a, b) {
	    return a + b & 0xFFFFFFFF;
	};
	
	function md5(s) {
	    s = s || (0, _string.string)(25, '[0-9a-zA-Z]');
	    return hex(md51(s));
	}
	
	// if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
	//     add32 = function (x, y) {
	//         let lsw = (x & 0xFFFF) + (y & 0xFFFF),
	//             msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	//         return (msw << 16) | (lsw & 0xFFFF);
	//     }
	//}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.serial = serial;
	
	var _string = __webpack_require__(16);
	
	function serial() {
	    var format = '***-**-****',
	        regex = '[0-9]',
	        r = /(\*+)/g;
	
	    if (arguments.length == 1) {
	        format = arguments.length <= 0 ? undefined : arguments[0];
	    } else if (arguments.length > 1) {
	        format = arguments.length <= 0 ? undefined : arguments[0];
	        regex = arguments.length <= 1 ? undefined : arguments[1];
	    }
	
	    return format.replace(r, function (match) {
	        return (0, _string.string)(match.length, regex);
	    });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.name = name;
	
	var _firstName = __webpack_require__(32);
	
	var _lastName = __webpack_require__(33);
	
	function name(gender) {
	    return (0, _firstName.firstName)(gender) + ' ' + (0, _lastName.lastName)();
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.firstName = firstName;
	
	var _config = __webpack_require__(1);
	
	var _random = __webpack_require__(12);
	
	function firstName(gender) {
	    var dataset = (0, _config.getDataSet)();
	    var names = gender === undefined ? dataset.firstNames.male.concat(dataset.firstNames.female) : gender === 0 || gender === 'female' ? dataset.firstNames.female : dataset.firstNames.male;
	
	    return (0, _random.pick)(names);
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.lastName = lastName;
	
	var _config = __webpack_require__(1);
	
	var _random = __webpack_require__(12);
	
	function lastName() {
	    var dataset = (0, _config.getDataSet)();
	    return (0, _random.pick)(dataset.lastNames);
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.gender = gender;
	
	var _config = __webpack_require__(1);
	
	var _random = __webpack_require__(12);
	
	var GENDER = [0, // female
	1 // male
	];
	
	function gender(isNum) {
	    var g = (0, _random.pick)(GENDER);
	    if (isNum) return g;else return (0, _config.getDataSet)().gender[g];
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.phone = phone;
	
	var _string = __webpack_require__(16);
	
	function phone(format) {
	    var r = /(\*+)/g;
	    format = format || '(***)***-****';
	    return format.replace(r, function (match) {
	        return (0, _string.string)(match.length, '[0-9]');
	    });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.street = street;
	
	var _config = __webpack_require__(1);
	
	var _errors = __webpack_require__(9);
	
	var _random = __webpack_require__(12);
	
	var _string = __webpack_require__(16);
	
	function street() {
	    var location = (0, _config.getDataSet)().location;
	    if (!location) throw (0, _errors.NO_LOCATION_FOUND)();
	
	    var streetNumber = (0, _string.string)(3, '[0-9]');
	    var streetName = (0, _string.string)(7, '[a-z]');
	    var streetType = (0, _random.pick)(location.roadTypes);
	
	    streetName = streetName.charAt(0).toUpperCase() + streetName.slice(1);
	
	    return streetNumber + ' ' + streetName + ' ' + streetType;
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.country = country;
	
	var _config = __webpack_require__(1);
	
	var _errors = __webpack_require__(9);
	
	var _random = __webpack_require__(12);
	
	function country(isCode) {
	    var loc = (0, _config.getDataSet)().location;
	    if (!loc) throw (0, _errors.NO_LOCATION_FOUND)();
	    return (0, _random.pick)(isCode ? loc.countryCodes : loc.countries);
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.address = address;
	
	var _string = __webpack_require__(16);
	
	var _street = __webpack_require__(36);
	
	var _country = __webpack_require__(37);
	
	function address() {
	    var st = (0, _street.street)();
	    var ci = (0, _string.string)(6, '[a-z]');
	    ci = ci.charAt(0).toUpperCase() + ci.slice(1);
	    var cty = (0, _country.country)(false);
	    var zip = (0, _string.string)(6, '[0-9]');
	    return st + ', ' + ci + ', ' + cty + ' ' + zip;
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.identicon = identicon;
	
	var _identicon = __webpack_require__(40);
	
	var _identicon2 = _interopRequireDefault(_identicon);
	
	var _hash = __webpack_require__(28);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function identicon(hashStr, size) {
	    hashStr = hashStr || (0, _hash.hash)();
	    size = size || 200;
	
	    var base64 = new _identicon2.default(hashStr.toString(), size).toString();
	
	    return 'data:image/png;base64,' + base64;
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Identicon.js v1.3.0
	 * http://github.com/stewartlord/identicon.js
	 *
	 * Requires PNGLib
	 * http://www.xarg.org/download/pnglib.js
	 *
	 * Copyright 2013, Stewart Lord
	 * Released under the BSD license
	 * http://www.opensource.org/licenses/bsd-license.php
	 */
	
	(function() {
	    var PNGlib;
	    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	        PNGlib = __webpack_require__(41);
	    } else {
	        PNGlib = window.PNGlib;
	    }
	
	    var Identicon = function(hash, options){
	        this.defaults = {
	            background: [240, 240, 240, 255],
	            hash:       this.createHashFromString((new Date()).toISOString()),
	            margin:     0.08,
	            size:       64
	        };
	
	        this.options     = typeof(options) === 'object' ? options : this.defaults;
	
	        // backward compatibility with old constructor (hash, size, margin)
	        if (arguments[1] && typeof(arguments[1]) === 'number') { this.options.size   = arguments[1]; }
	        if (arguments[2])                                      { this.options.margin = arguments[2]; }
	
	        this.hash        = hash                    || this.defaults.hash;
	        this.background  = this.options.background || this.defaults.background;
	        this.foreground  = this.options.foreground;
	        this.margin      = this.options.margin     || this.defaults.margin;
	        this.size        = this.options.size       || this.defaults.size;
	    };
	
	    Identicon.prototype = {
	        background: null,
	        foreground: null,
	        hash:       null,
	        margin:     null,
	        size:       null,
	
	        render: function(){
	            var hash    = this.hash,
	                size    = this.size,
	                baseMargin  = Math.floor(size * this.margin),
	                cell    = Math.floor((size - (baseMargin * 2)) / 5),
	                margin  = Math.floor((size - cell * 5) / 2),
	                image   = new PNGlib(size, size, 256);
	
	            // light-grey background
	            var bg      = image.color(this.background[0], this.background[1], this.background[2], this.background[3]),
	                fg;
	
	            if (this.foreground) {
	              fg        = image.color(this.foreground[0], this.foreground[1], this.foreground[2]);
	            } else {
	              // foreground is last 7 chars as hue at 50% saturation, 70% brightness
	              var rgb   = this.hsl2rgb(parseInt(hash.substr(-7), 16) / 0xfffffff, 0.5, 0.7);
	              fg        = image.color(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
	            }
	
	            // the first 15 characters of the hash control the pixels (even/odd)
	            // they are drawn down the middle first, then mirrored outwards
	            var i, color;
	            for (i = 0; i < 15; i++) {
	                color = parseInt(hash.charAt(i), 16) % 2 ? bg : fg;
	                if (i < 5) {
	                    this.rectangle(2 * cell + margin, i * cell + margin, cell, cell, color, image);
	                } else if (i < 10) {
	                    this.rectangle(1 * cell + margin, (i - 5) * cell + margin, cell, cell, color, image);
	                    this.rectangle(3 * cell + margin, (i - 5) * cell + margin, cell, cell, color, image);
	                } else if (i < 15) {
	                    this.rectangle(0 * cell + margin, (i - 10) * cell + margin, cell, cell, color, image);
	                    this.rectangle(4 * cell + margin, (i - 10) * cell + margin, cell, cell, color, image);
	                }
	            }
	
	            return image;
	        },
	
	        rectangle: function(x, y, w, h, color, image) {
	            var i, j;
	            for (i = x; i < x + w; i++) {
	                for (j = y; j < y + h; j++) {
	                    image.buffer[image.index(i, j)] = color;
	                }
	            }
	        },
	
	        // adapted from: https://gist.github.com/aemkei/1325937
	        hsl2rgb: function(h, s, b){
	            h *= 6;
	            s = [
	                b += s *= b < .5 ? b : 1 - b,
	                b - h % 1 * s * 2,
	                b -= s *= 2,
	                b,
	                b + h % 1 * s,
	                b + s
	            ];
	
	            return[
	                s[ ~~h    % 6 ],  // red
	                s[ (h|16) % 6 ],  // green
	                s[ (h|8)  % 6 ]   // blue
	            ];
	        },
	
	        toString: function(){
	            return this.render().getBase64();
	        },
	
	        // Creates a consistent-length hash from a string
	        createHashFromString: function(str) {
	          var hash = '0', salt = 'identicon', i, chr, len;
	
	          if (!str) {
	            return hash;
	          }
	
	          str += salt + str; // Better randomization for short inputs.
	
	          for (i = 0, len = str.length; i < len; i++) {
	            chr   = str.charCodeAt(i);
	            hash  = ((hash << 5) - hash) + chr;
	            hash |= 0; // Convert to 32bit integer
	          }
	          return hash.toString();
	        }
	    };
	
	    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	        module.exports = Identicon;
	    } else {
	        window.Identicon = Identicon;
	    }
	})();


/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	* A handy class to calculate color values.
	*
	* @version 1.0
	* @author Robert Eisele <robert@xarg.org>
	* @copyright Copyright (c) 2010, Robert Eisele
	* @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
	* @license http://www.opensource.org/licenses/bsd-license.php BSD License
	*
	*/
	
	(function() {
	
		// helper functions for that ctx
		function write(buffer, offs) {
			for (var i = 2; i < arguments.length; i++) {
				for (var j = 0; j < arguments[i].length; j++) {
					buffer[offs++] = arguments[i].charAt(j);
				}
			}
		}
	
		function byte2(w) {
			return String.fromCharCode((w >> 8) & 255, w & 255);
		}
	
		function byte4(w) {
			return String.fromCharCode((w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255);
		}
	
		function byte2lsb(w) {
			return String.fromCharCode(w & 255, (w >> 8) & 255);
		}
	
		// modified from original source to support NPM
		var PNGlib = function(width,height,depth) {
	
			this.width   = width;
			this.height  = height;
			this.depth   = depth;
	
			// pixel data and row filter identifier size
			this.pix_size = height * (width + 1);
	
			// deflate header, pix_size, block headers, adler32 checksum
			this.data_size = 2 + this.pix_size + 5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;
	
			// offsets and sizes of Png chunks
			this.ihdr_offs = 0;									// IHDR offset and size
			this.ihdr_size = 4 + 4 + 13 + 4;
			this.plte_offs = this.ihdr_offs + this.ihdr_size;	// PLTE offset and size
			this.plte_size = 4 + 4 + 3 * depth + 4;
			this.trns_offs = this.plte_offs + this.plte_size;	// tRNS offset and size
			this.trns_size = 4 + 4 + depth + 4;
			this.idat_offs = this.trns_offs + this.trns_size;	// IDAT offset and size
			this.idat_size = 4 + 4 + this.data_size + 4;
			this.iend_offs = this.idat_offs + this.idat_size;	// IEND offset and size
			this.iend_size = 4 + 4 + 4;
			this.buffer_size  = this.iend_offs + this.iend_size;	// total PNG size
	
			this.buffer  = new Array();
			this.palette = new Object();
			this.pindex  = 0;
	
			var _crc32 = new Array();
	
			// initialize buffer with zero bytes
			for (var i = 0; i < this.buffer_size; i++) {
				this.buffer[i] = "\x00";
			}
	
			// initialize non-zero elements
			write(this.buffer, this.ihdr_offs, byte4(this.ihdr_size - 12), 'IHDR', byte4(width), byte4(height), "\x08\x03");
			write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');
			write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');
			write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');
			write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');
	
			// initialize deflate header
			var header = ((8 + (7 << 4)) << 8) | (3 << 6);
			header+= 31 - (header % 31);
	
			write(this.buffer, this.idat_offs + 8, byte2(header));
	
			// initialize deflate block headers
			for (var i = 0; (i << 16) - 1 < this.pix_size; i++) {
				var size, bits;
				if (i + 0xffff < this.pix_size) {
					size = 0xffff;
					bits = "\x00";
				} else {
					size = this.pix_size - (i << 16) - i;
					bits = "\x01";
				}
				write(this.buffer, this.idat_offs + 8 + 2 + (i << 16) + (i << 2), bits, byte2lsb(size), byte2lsb(~size));
			}
	
			/* Create crc32 lookup table */
			for (var i = 0; i < 256; i++) {
				var c = i;
				for (var j = 0; j < 8; j++) {
					if (c & 1) {
						c = -306674912 ^ ((c >> 1) & 0x7fffffff);
					} else {
						c = (c >> 1) & 0x7fffffff;
					}
				}
				_crc32[i] = c;
			}
	
			// compute the index into a png for a given pixel
			this.index = function(x,y) {
				var i = y * (this.width + 1) + x + 1;
				var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;
				return j;
			}
	
			// convert a color and build up the palette
			this.color = function(red, green, blue, alpha) {
	
				alpha = alpha >= 0 ? alpha : 255;
				var color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;
	
				if (typeof this.palette[color] == "undefined") {
					if (this.pindex == this.depth) return "\x00";
	
					var ndx = this.plte_offs + 8 + 3 * this.pindex;
	
					this.buffer[ndx + 0] = String.fromCharCode(red);
					this.buffer[ndx + 1] = String.fromCharCode(green);
					this.buffer[ndx + 2] = String.fromCharCode(blue);
					this.buffer[this.trns_offs+8+this.pindex] = String.fromCharCode(alpha);
	
					this.palette[color] = String.fromCharCode(this.pindex++);
				}
				return this.palette[color];
			}
	
			// output a PNG string, Base64 encoded
			this.getBase64 = function() {
	
				var s = this.getDump();
	
				var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				var c1, c2, c3, e1, e2, e3, e4;
				var l = s.length;
				var i = 0;
				var r = "";
	
				do {
					c1 = s.charCodeAt(i);
					e1 = c1 >> 2;
					c2 = s.charCodeAt(i+1);
					e2 = ((c1 & 3) << 4) | (c2 >> 4);
					c3 = s.charCodeAt(i+2);
					if (l < i+2) { e3 = 64; } else { e3 = ((c2 & 0xf) << 2) | (c3 >> 6); }
					if (l < i+3) { e4 = 64; } else { e4 = c3 & 0x3f; }
					r+= ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);
				} while ((i+= 3) < l);
				return r;
			}
	
			// output a PNG string
			this.getDump = function() {
	
				// compute adler32 of output pixels + row filter bytes
				var BASE = 65521; /* largest prime smaller than 65536 */
				var NMAX = 5552;  /* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */
				var s1 = 1;
				var s2 = 0;
				var n = NMAX;
	
				for (var y = 0; y < this.height; y++) {
					for (var x = -1; x < this.width; x++) {
						s1+= this.buffer[this.index(x, y)].charCodeAt(0);
						s2+= s1;
						if ((n-= 1) == 0) {
							s1%= BASE;
							s2%= BASE;
							n = NMAX;
						}
					}
				}
				s1%= BASE;
				s2%= BASE;
				write(this.buffer, this.idat_offs + this.idat_size - 8, byte4((s2 << 16) | s1));
	
				// compute crc32 of the PNG chunks
				function crc32(png, offs, size) {
					var crc = -1;
					for (var i = 4; i < size-4; i += 1) {
						crc = _crc32[(crc ^ png[offs+i].charCodeAt(0)) & 0xff] ^ ((crc >> 8) & 0x00ffffff);
					}
					write(png, offs+size-4, byte4(crc ^ -1));
				}
	
				crc32(this.buffer, this.ihdr_offs, this.ihdr_size);
				crc32(this.buffer, this.plte_offs, this.plte_size);
				crc32(this.buffer, this.trns_offs, this.trns_size);
				crc32(this.buffer, this.idat_offs, this.idat_size);
				crc32(this.buffer, this.iend_offs, this.iend_size);
	
				// convert PNG to string
				return "\211PNG\r\n\032\n"+this.buffer.join('');
			}
		}
	
		// modified from original source to support NPM
		if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
			module.exports = PNGlib;
		} else {
			window.PNGlib = PNGlib;
		}
	})();


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.date = date;
	
	var _integer = __webpack_require__(23);
	
	function date() {
	    var before = void 0,
	        after = void 0;
	    before = (arguments.length <= 1 ? undefined : arguments[1]) instanceof Date ? arguments.length <= 1 ? undefined : arguments[1] : new Date();
	    after = (arguments.length <= 0 ? undefined : arguments[0]) instanceof Date ? arguments.length <= 0 ? undefined : arguments[0] : new Date(1970, 1, 1);
	
	    if (after > before) {
	        var _after$before = { after: _after, before: _before },
	            _before = _after$before.before,
	            _after = _after$before.after;
	    }
	
	    var dateTime = (0, _integer.integer)(after.getTime(), before.getTime());
	
	    return new Date(dateTime);
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dateIn = dateIn;
	
	var _random = __webpack_require__(12);
	
	function dateIn(scope) {
	    var current = new Date(),
	        before = void 0,
	        after = void 0,
	        c = {
	        cYr: current.getFullYear(),
	        cMn: current.getMonth(),
	        cDt: current.getDate(),
	        cDy: current.getDay(),
	        cHr: current.getHours(),
	        cMin: current.getMinutes(),
	        cSec: current.getSeconds(),
	        cMil: current.getMilliseconds()
	    };
	
	    if (scope == 'day') {
	        before = new Date(c.cYr, c.cMn, c.cDt + 1).getTime() - 1;
	        after = new Date(c.cYr, c.cMn, c.cDt - 1, 23, 59, 59, 999).getTime() + 1;
	    } else if (scope == 'month') {
	        before = new Date(c.cYr, c.cMn + 1, 0).getTime() - 1;
	        after = new Date(c.cYr, c.cMn - 1, 31, 23, 59, 59, 999).getTime() + 1;
	    } else if (scope == 'year') {
	        before = new Date(c.cYr + 1, 0, 1).getTime() - 1;
	        after = new Date(c.cYr - 1, 11, 31, 23, 59, 59, 999).getTime() + 1;
	    } else {
	        var firstDay = c.cDt - c.cDy + (c.cDy == 0 ? -6 : 1);
	        var lastDay = c.cDt + (c.cDy == 0 ? 0 : 6 - c.cDy) + 1;
	        before = new Date(c.cYr, c.cMn, lastDay).getTime() - 1;
	        after = new Date(c.cYr, c.cMn, firstDay, 23, 59, 59, 999).getTime() + 1;
	    }
	
	    return new Date((0, _random.number)(after, before));
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.compile = compile;
	
	var _index = __webpack_require__(10);
	
	var functions = _interopRequireWildcard(_index);
	
	var _errors = __webpack_require__(9);
	
	var _parser = __webpack_require__(24);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function compile(template, scope) {
	    scope = scope || {};
	    if (typeof template != 'string') throw (0, _errors.INVALID_TEMPLATE)(template);
	
	    var token = (0, _parser.tokenize)(template, scope);
	
	    token.commands.forEach(function (command) {
	        if (!command.skip) {
	
	            var ref = scope ? scope[command.name] || functions[command.name] : functions[command.name];
	
	            if (ref == null) throw (0, _errors.NO_FUNCTION_FOUND_IN_TEMPLATE)(command.name, template);
	
	            command.parameters.map(function (param) {
	                if (param.$$scopeVar) {
	                    return scope[param.name];
	                } else {
	                    return param;
	                }
	            });
	
	            command.value = typeof ref != 'function' ? ref.toString() : ref.call.apply(ref, [functions].concat(_toConsumableArray(command.parameters)));
	        }
	    });
	
	    return token.commands.length > 0 ? serialize(token.commands) : template;
	}
	
	var serialize = function serialize(commands) {
	    return (0, _parser.mapStrTypes)(commands.map(function (p) {
	        return p.value;
	    }).join(''));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.schema = schema;
	
	var _lodash = __webpack_require__(46);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _parser = __webpack_require__(24);
	
	var _errors = __webpack_require__(9);
	
	var _index = __webpack_require__(10);
	
	var functions = _interopRequireWildcard(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var isPrimitive = function isPrimitive(obj) {
	    var types = ['number', 'string', 'null', 'undefined', 'boolean'];
	    return types.indexOf(typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) > -1;
	};
	
	var isObject = function isObject(obj) {
	    return Object.prototype.toString.call(obj) == '[object Object]';
	};
	
	var isArray = function isArray(obj) {
	    return Object.prototype.toString.call(obj) == '[object Array]';
	};
	
	var parseSchemaTree = function parseSchemaTree(obj) {
	    if (typeof obj == 'function') throw new Error('schema property does not allow function');
	
	    if (isObject(obj)) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var key = _step.value;
	
	                if (isPrimitive(obj[key])) {
	                    if (typeof obj[key] == 'string') {
	                        obj[key] = (0, _parser.tokenize)(obj[key]);
	                    }
	                } else {
	                    obj[key] = parseSchemaTree(obj[key]);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	    } else if (isArray(obj)) {
	        obj.forEach(function (e, index) {
	            if (isPrimitive(e)) {
	                if (typeof e == 'string') {
	                    obj[index] = (0, _parser.tokenize)(e);
	                }
	            } else {
	                obj[index] = parseSchemaTree(e);
	            }
	        });
	    }
	
	    return obj;
	};
	
	function schema(obj) {
	    if (!isObject(obj)) throw new Error('schema must be an plain object');
	
	    return function (scope) {
	
	        function loop(o) {
	            var isArr = isArray(o);
	            var result = isArr ? [] : {};
	            (0, _lodash2.default)(o, function (value, itt) {
	                if (isPrimitive(value)) result[itt] = value;else if (value.$$bsToken) {
	                    (function () {
	                        var r = [];
	                        (0, _lodash2.default)(value.commands, function (command) {
	                            if (!command.skip) {
	
	                                var ref = scope ? scope[command.name] || functions[command.name] : functions[command.name];
	
	                                if (ref == null) throw (0, _errors.NO_FUNCTION_FOUND_IN_TEMPLATE)(command.name);
	
	                                var params = command.parameters.map(function (param) {
	                                    if (param.$$scopeVar) {
	                                        return scope[param.name];
	                                    } else {
	                                        return param;
	                                    }
	                                });
	
	                                r.push(typeof ref != 'function' ? ref.toString() : ref.call.apply(ref, [functions].concat(_toConsumableArray(params))));
	                            } else {
	                                r.push(command.value);
	                            }
	                        });
	                        result[itt] = (0, _parser.mapStrTypes)(r.join(''));
	                    })();
	                } else {
	                    result[itt] = loop(value);
	                }
	            });
	            return result;
	        }
	
	        return loop(this);
	    }.bind(parseSchemaTree(obj));
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _([1, 2]).forEach(function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, typeof iteratee == 'function' ? iteratee : identity);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = forEach;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=benthos.js.map