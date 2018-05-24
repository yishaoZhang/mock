// mock入口，该代码结构可最大程度防止冲突
import index from './data'

let container = [
    index
];

export default {
    init() {
        for(let i of container) {
            i.init();
        }
    }
}