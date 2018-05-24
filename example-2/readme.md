## 结构介绍 ##
    |-- build
    |   |-- dev-server.js               // build本地服务文件
    |-- mock                            // mock数据文件夹
    |   |-- data                        
    |       |-- index.js                // 数据文件，文件名与业务模块对应 
    |   |-- index.js                    // mock入口JS

## 特性说明 ##
+ 本地express服务中添加接口(路由)
+ 真实接口利用mock特性返回静态数据
+ axios与Mock.setup()配合报错
    + setTimeout((res) => {}, Math.random()*time)设置动态响应时间