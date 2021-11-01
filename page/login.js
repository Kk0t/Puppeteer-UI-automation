const LoginPage = {
    input : 'input.ivu-input.ivu-input-default',
    submitbtn : 'button.submit-btn',
    tabItem : 'div.tab-item',
    Item :'div.item',
}
const {account, password} = require('../config')

module.exports = class LoginAction {
    constructor(page) {
        this.page = page
    }

    async start() {
        return new Promise(async (resolve, reject) => {
            try {

                if (await this.checkLogin())

                {
                    await this.clickTabItem()
                    await this.inputFormName()
                    await this.inputFormPwd()
                    await this.clickSubmitBtn()
                }

                resolve()

            } catch (error) {
                console.error(error)
                reject(error)
            }
        })
    }

    async clickTabItem() {
        await this.page.clicks(LoginPage.tabItem,1)
        return
    }

    async clickSubmitBtn() {
        await this.page.clickjump(LoginPage.submitbtn)
        return
    }


    async inputFormName() {
        await this.page.inputs(LoginPage.input, account, 2)
        return
    }

    async inputFormPwd() {
        await this.page.inputs(LoginPage.input, password, 3)
        return
    }

    async checkLogin() {
        const resp = await this.page.findelements(LoginPage.tabItem)
        return resp
      }
    
    async clickItem(){
        await this.page.clicks(LoginPage.Item,0)
        return
    }

}