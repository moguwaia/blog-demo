module.exports = {
    base: '/moguwaia.github.io/',
    title: '魔咕歪的技能书',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/moguwaia/moguwaia.github.io',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: '首页', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ],
        sidebar:[
            ['/home','首页'],
            ['/blog/FirstBlog.md','我的第一篇博客'],
            ['/','JS基础'],
            ['/','Vue'],
            ['/','Angular'],
            ['/','Java基础'],
            ['/','Java进阶'],
            ['/','数据库'],
            ['/','']
        ]
    }
}
