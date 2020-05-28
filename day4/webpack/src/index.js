const {name, age, sex} = require('./info')
console.log(name);
console.log(age);
console.log(sex);

// webpack默认是不能打包 css 文件的 但是加载上 loader 就可以使用了
// 依赖css
require('../css/index.css')
