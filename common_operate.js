const puppeteer = require('puppeteer-core')
const { chromePath, host } = require('./config')

module.exports = class CommonOperate {
  constructor() {
    this.pageInstance = null
    this.bow = null
  }

  setup() {
    return new Promise(async (resolve, reject) => {
      try {
        const browser = await puppeteer.launch({
          devtools: true, //开发者模式
          headless: false, //无头模式
          executablePath: chromePath,
          args: ['--start-maximized'], //窗口最大化
          // args: ['--no-sandbox']
        })
        const page = await browser.newPage()
        await page.setViewport({
          width: 1366,
          height: 768, //宽高
          isMobile: true,
          hasTouch: true
        });
        this.pageInstance = page
        this.bow = browser
        resolve(this)
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }

  // todo
  findelement(selector) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.pageInstance.$(selector)
        resolve()
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }

  // 查找元素
  findelements(selector) {
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await this.pageInstance.$$(selector)
        resolve(resp.length !== 0)// 
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }


  // 输入
  input(selector, text) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.pageInstance.$eval(selector, input => input.value = '')
        await this.pageInstance.type(selector, text, { delay: 100 })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }


  // 通过索引输入
  inputs(selector, text, index) {
    return new Promise(async (resolve, reject) => {
      try {
        const inputElement = await this.pageInstance.$$(selector)
        await inputElement[index].type(text, { delay: 100 });
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }


  // 带跳转的点击
  clickjump(selector) {
    return new Promise(async (resolve, reject) => {
      try {
        await Promise.all([
          this.pageInstance.waitForNavigation(),
          this.pageInstance.click(selector),
        ])
        this.pageInstance.waitFor(1000)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  // 点击
  click(selector) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.pageInstance.click(selector),
          resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  // 通过索引点击
  clicks(selector, index) {
    return new Promise(async (resolve, reject) => {
      try {
        // this.pageInstance.waitForNavigation()
        await this.pageInstance.waitForSelector(selector, 30)
        const clickElement = await this.pageInstance.$$(selector)
        console.log(clickElement)
        await clickElement[index].click();
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  // // 通过索引点击
  // clicksJump(selector, index) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const clickElement = null
  //       await Promise.all([
  //         this.pageInstance.waitForNavigation(),
  //         clickElement = await this.pageInstance.$$(selector),
  //         // console.log(clickElement)
  //         await clickElement[index].click()
  //       ])
  //       resolve()
  //     } catch (error) {
  //       reject(error)
  //     }
  //   })
  // }

  //跳转指定页面
  goto(lessonUrl) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.pageInstance.goto(host + lessonUrl, { waitUntil: 'networkidle2' })
        resolve()
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }

  //等待
  waitfor(time) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.pageInstance.waitFor(time)
        resolve()
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }

  //关闭浏览器
  closebrowser() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.bow.close()
        resolve()
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }

  // 关闭页面
  closepage() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.pageInstance.close()
        resolve()
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }


  //截图
  screenshot(name) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.pageInstance.screenshot({
          path:
            'D:\\工具\\shumei-saas\\screenshot\\' + name + '.png'
        })//此处需修改项目目录
        resolve()
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }

}

