const basePath = 'post'

module.exports = {
    base: "/moguwaia.github.io/",
    title: '魔咕歪的技能书',
    description: 'Vuepress blog demo',
    dest:'public',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/moguwaia/moguwaia.github.io',
        // 自定义仓库链接文字。
        repoLabel: '关于我',
        //导航栏
        nav: [
            { text: '首页', link: '/' },
            { text: '学习笔记', link: '/blog/Home.md' }
        ],
        //边栏
        sidebar:[
            ['/blog/Home.md','首页'],
            ['','WEB前端技术'],
            ['','WEB前端核心技术'],
            ['','前端框架'],
            ['/','Java基础'],
            ['/','Java进阶'],
            ['/','Mybatis框架'],
            ['/','Spring框架'],
            ['/','SpringMVC框架'],
            ['/','数据库'],
            ['/','JDBC技术'],
            ['/','分布式框架']
        ]
    }
}
