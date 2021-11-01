const IndexPage = {
    haspopup : 'div.ant-menu-submenu-title', //一级菜单
    menuitem : 'li.ant-menu-item', //二级菜单
}

module.exports = class IndexAction {
    constructor(page) {
        this.page = page
    }

    async clickmenuitem(i) {
        await this.page.click(IndexPage.menuitem[i])
        return
    }

    async findmenuitem() {
        const resp =  await this.page.findelementss(IndexPage.menuitem)
        console.log(resp)

        // const a = await this.page.evaluate(() => {
        //     return Promise.resolve(document.querySelectorAll('li.ant-menu-item a span'))
        // });
        // console.log(a)
        return resp
    }



}