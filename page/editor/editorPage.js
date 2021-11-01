const EditorPage = {
    articleTitel : 'input.ant-input',  //标题输入框
    articleBody : 'div#tinymceEditor.doc-cnt.mce-content-body.mce-edit-focus',  //内容输入框
    submitBtn : 'button.ant-btn.ant-btn-primary', //提交审核按钮
    plusIcon : 'i.plus-icon.anticon.anticon-plus', //添加封面icon
    rendered : 'div.ant-select-selection__rendered', //频道选择 id为2
    menuItem : 'li.ant-select-dropdown-menu-item', // 频道选择菜单
    save : 'div.save-body > div > button', //存草稿

    //选择图片弹框
    image : "i.image"
}

module.exports = class EditorAction {
    constructor(page) {
        this.page = page
    }

    // 点击提交审核
    async clickSubmitBtn() {
        await this.page.click(EditorPage.submitBtn)
        return
    }

    // 输入标题
    async inputArticleTitel() {
        await this.page.input(EditorPage.articleTitel, 'titel')
        return
    }

    // 输入正文
    async inputArticleBody() {
        await this.page.input(EditorPage.articleBody, 'body')
        return
    }

    //点击上传封面
    async clickPlusIcon() {
        await this.page.click(EditorPage.plusIcon)
        return
    }

    //点击选择图片
    async clickImage(){
        await this.page.clicks(EditorPage.image,3)
        return
    }

    //点击频道菜单
    async clickRendered(){
        await this.page.clicks(EditorPage.rendered,2)
        return
    }

    //点击选择频道
    async clickMenuItem(){
        await this.page.clicks(EditorPage.menuItem,3)
        return
    }


}