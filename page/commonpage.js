const CommonPages = {
    user : 'span.action.ant-dropdown-link.user-dropdown-menu.ant-dropdown-trigger',
}

module.exports = class CommonPage {
    constructor(page) {
        this.page = page
    }

    async clickuser() {
        await this.page.click(CommonPages.user)
        return
    }

    async checkLoginSuccess() {
        const resp = await this.page.findelements(CommonPages.user)
        return resp
      }

    async assertion(key) {  //存在该元素返回true，否则返回false
        if(await this.page.findelements(CommonPages[key])){
            return true
        }else{
            return false
        }     
    }
    
}