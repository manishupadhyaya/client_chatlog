const fs = require('fs');

const content = fs.readFileSync('./build/index.html').toString();
fs.writeFileSync('./build/200.html', content);