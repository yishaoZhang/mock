
const NavObj = {
    path: ['/a', '/b', '/c', '/d', '/e', '/f', '/g', '/h', , '/b', '/c', '/d', '/e', '/f', '/g', '/h', '/i', '/j', '/k', '/l'],
    icon: ['el-icon-sold-out', 'el-icon-news', 'el-icon-sold-out', 'el-icon-news', 'el-icon-sold-out', 'el-icon-news', 'el-icon-sold-out', 'el-icon-news', 'el-icon-service', 'el-icon-sold-out', 'el-icon-sold-out', 'el-icon-news', 'el-icon-sold-out', 'el-icon-news', 'el-icon-sold-out', 'el-icon-news', 'el-icon-sold-out', 'el-icon-news', 'el-icon-service', 'el-icon-sold-out', 'el-icon-news', 'el-icon-service'],
    name: ['首页列表', '课程监控', '订单管理', '学生档案', '老师档案', '课表信息', '取消课程', '课程监控', '订单管理', '学生档案', '老师档案', '课表信息', '学生档案', '老师档案', '课表信息', '取消课程', '课程监控', '订单管理', '学生档案', '老师档案', '课表信息']
}

module.exports = function(app, Mock) {
    app.post('/testMock', function(req, res) {
        setTimeout(() =>{
            res.json(Mock.mock({
                code: 200,
                msg: 'success',
                data: {
                    'data|5-20': [{
                        'id|+1': 1,
                        'path|+1': NavObj.path,
                        'icon|+1': NavObj.icon,
                        'name|+1': NavObj.name
                    }]
                }
            }))
        }, Math.random() * 1000)
    })
}