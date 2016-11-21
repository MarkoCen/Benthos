# Benthos
 * Generates massive sample data in seconds
 * Works both on Browser and Node environment
 * Supports Generating data from template or schema

### Usage
In Browser
```html
<script src="node_modules/benthos/dist/benthos.min.js"></script>
<script>

    var email = benthos.email();

</script>
```
In CommonJS
```javascript
const benthos = require('benthos');
const email = benthos.email();
```
In ES2015 Modules
```javascript
import { email } from 'benthos'
const email = email();
```

### Generate simple data
```javascript
import { fullName, email, url } from 'benthos';

let name = fullName(); // Harry Potter
let email = email('google.com'); // djeifl@google.com
let url = url({ host: 'markocen.com', path: 'blog' }) // http://markocen.com/blog
```

### Generate data from template
```javascript
import { compile } from 'benthos';

// bio = 'Hello, my name is Marko Cen, I'm from China'
let bio = compile('Hello, my name is #{fullName}, I\'m from #{country}');
```

### Generate data from schema
```javascript
import { schema } from 'benthos';

const ProfileSchema = schema({
    name: '#{fullName}',
    age: '#{getAge}',
    gender: '#{gender(false)}'
})

// profileData = {
//    name: 'Micheal Smith',
//    age: 43,
//    gender: 'Male'
//}
let profileData = ProfileSchema({
    getAge: function(){
        return this.integer(25, 65);
    }
})
```
