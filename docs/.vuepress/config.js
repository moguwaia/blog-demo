module.exports = {
    base: '/moguwaia.github.io/',
    title: '魔咕歪的技能书',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/ysmartboyk/moguwai.github.io/blog-demo',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ],
        sidebar:[
            ['/','首页'],
            ['/blog/FirstBlog.md','我的第一篇博客']
        ]
    }
}
