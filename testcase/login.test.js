const Tool = require('../common_operate')
const LoginAction = require('../page/login')
const CommonPage = require('../page/commonpage')
const IndexPage = require('../page/index/indexPage')
const report = require('jest-allure/dist/setup')

const tool = new Tool()
const login = new LoginAction(tool)
const common = new CommonPage(tool)
const index = new IndexPage(tool)

beforeAll(async () => {
    await tool.setup()
    report.registerAllureReporter()
})

afterAll(async () => {
    await tool.closepage()
    await tool.closebrowser()
})

test("测试登录", async () => {
    await tool.goto("/")
    if (await login.checkLogin()) {
        await login.clickTabItem()
        await login.inputFormName()
        await login.inputFormPwd()
        await login.clickSubmitBtn()
        // const pageTitle = await tool.pageInstance.title();
        // const n = await common.assertion('user')
        // await expect(n).toBeTruthy()
        // await expect(pageTitle).toMatch('智媒平台')
        // if (!n) {
        //     await tool.screenshot('login')
        // }
        await login.clickItem()
        await tool.waitfor(5000)
    } else {
        await tool.screenshot('login')
    }
}, 100000)


