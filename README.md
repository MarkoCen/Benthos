# Benthos
 * Generates massive sample data in seconds
 * Works both on Browser and Node environment
 * Supports Generating data from template or schema
 
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

let bio = compile('Hello, my name is #{fullName}, I am from #{city}');
```
