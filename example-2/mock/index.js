// mock入口，该代码结构可最大程度防止冲突
const index = require('./data')

let container = [
    index
];

module.exports = {
    init() {
        for(let i of container) {
            i.init();
        }
    }
}