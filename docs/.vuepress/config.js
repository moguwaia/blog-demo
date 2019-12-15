module.exports = {
    base: '/blog-demo',
    title: 'blog-demo',
    description: 'Vuepress blog demo'
}
module.exports = {
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/ysmartboyk/moguwai.github.io/blog-demo',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ]
    }
}
