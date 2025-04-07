const fs = require('fs');
const filePath = 'dj.txt';
if (fs.existsSync(filePath)) {
  console.log('The file vik.txt exists!');
} else {
  console.log('The file vik.txt does not exist.');
}
