const { resolve } = require('dns');
const path = require('path');

// ---------------- Using __dirname -----------------------

console.log(__dirname);

// ----------------- Using __filename ----------------------
console.log(__filename);

// -------------------- Using basename() method --------------

const filepath = '/Users/lenovo/Desktop/fullStack/Day2/pathfile.js';
console.log(path.basename(filepath))

// ---------------- Using dirname() method ---------------------
const filepath = '/Users/lenovo/Desktop/fullStack/Day2/pathfile.js';

console.log(path.dirname(filepath))

// ------------------- Using extname() method -------------------------
const filepath = '/Users/lenovo/Desktop/fullStack/Day2/pathfile.js';

console.log(path.extname(filepath))

// ------------------- Using join() method ----------------------------
const filepath = path.join('users' , 'lenovo' , 'Desktop' , 'fullstack' , 'demo.js')

console.log(filepath)

// ------------------ Using resolve() method ---------------------------

console.log(path.resolve('path.js'))

// --------------- Using path.pasre() ---------------------------------

const filepath = '/Users/lenovo/Desktop/fullStack/Day2/pathfile.js';

console.log(path.parse(filepath))


// Real world Example

const path = require('path')
const fs = require('fs')

const filepath = path.join(__dirname , 'data' , 'info.txt')
fs.writeFileSync(filepath , 'hello from NodeJS path module!')
const data = fs.readFileSync(filepath , 'utf-8');
console.log(data)