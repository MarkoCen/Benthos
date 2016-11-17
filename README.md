# Benthos
 * Generates massive sample data in seconds
 * Works both on Browser and Node environment
 * Supports Generating data from template or schema
 
### Generate Single Data
```javascript
import { fullName, email, url } from 'benthos';

let name = fullName(); // Harry Potter
let email = email('google.com'); // djeifl@google.com
let url = url({ host: 'markocen.com', path: 'blog' }) // http://markocen.com/blog
```
