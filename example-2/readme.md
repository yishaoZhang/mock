## 结构介绍 ##
    |-- build
    |   |-- dev-server.js               // build本地服务文件
    |-- mock                            // mock数据文件夹
    |   |-- data                        
    |       |-- index.js                // 数据文件，文件名与业务模块对应 
    |   |-- index.js                    // mock入口JS

## 原理 ##
+ 本地基于express服务中添加真实接口
+ 真实接口利用mock返回静态数据
+ axios与Mock.setup()配合报错，setTimeout((res) => {}, Math.random()*time)设置响应时间