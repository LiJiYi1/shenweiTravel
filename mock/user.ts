function createUserList() {
    //用户的数据
    return [
        {
            userId: 1,
            avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'admin',
            password: '666666',
            userName:'神威难藏泪',
            desc: '平台管理员',
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token',
        },
    ]
}

export default [
    // 用户登录接口
    {
        url: '/api/user/login',//请求地址
        method: 'post',//请求方式
        response: ({ body }) => {
            //获取请求体携带过来的用户名与密码
            const { username, password } = body;
            //调用获取用户信息函数,用于判断是否有此用户
            const checkUser = createUserList().find(
                (item) => item.username === username && item.password === password,
            )
            //没有用户返回失败信息
            if (!checkUser) {
                return { code: 201, data: { message: '账号或者密码不正确' } }
            }
            //如果有返回成功信息
            const { token } = checkUser
            return { code: 200, data: { token } }
        },
    },
    // 获取用户信息
    {
        url: '/api/user/info',
        method: 'get',
        response: (request) => {
            //获取请求头携带token
            const token = request.headers.token;
            //查看用户信息是否包含有次token用户
            const checkUser = createUserList().find((item) => item.token === token)
            //没有返回失败的信息
            if (!checkUser) {
                return { code: 201, data: { message: '获取用户信息失败' } }
            }
            //如果有返回成功信息
            return { code: 200, data: { checkUser } }
        },
    },
    //用户退出登录
    {
        url: '/api/user/logout', // 接口的请求路径
        method: 'post', // 请求方法
        response: ({ body }) => {
            const { token } = body;
            // 简单的 token 验证逻辑（根据实际情况调整）
            if (!token) {
                return {
                    success: false,
                    message:'未提供 token，退出登录失败。',
                };
            }
            // 模拟 token 验证通过，退出登录
            // 在实际应用中，这里可能需要清除 token 或进行其他清理操作
            return {
                success: true,
                message: '退出登录成功。',
            };
        },
    },
]