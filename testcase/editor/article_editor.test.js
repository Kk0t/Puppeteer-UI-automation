const Tool = require('../../common_operate')
const LoginAction = require('../../page/login')
const report = require('jest-allure/dist/setup')
const EditorAction = require('../../page/editor/editorPage')

const tool = new Tool()
const login = new LoginAction(tool)
const editor = new EditorAction(tool)

beforeAll(async () => {
    await tool.setup()
    report.registerAllureReporter()
})

afterAll(async () => {
    // await tool.closepage()
    // await tool.closebrowser()
})

test("新增稿件", async () => {
    await tool.goto("/produce/article/editor")
    await login.start()
    await tool.waitfor(1000)
    await editor.inputArticleTitel()
    await editor.inputArticleBody()
    await editor.clickPlusIcon()
    // await editor.clickRendered()
    // await tool.waitfor(1000)
    // await editor.clickMenuItem()
    // await tool.waitfor(1000)
    console.log("点击选择图片")
    await tool.waitfor(1000)
    await editor.clickImage()
    await editor.clickSubmitBtn()
    await editor.clickSubmitBtn()
    await tool.screenshot('addEditor')

}, 100000)
