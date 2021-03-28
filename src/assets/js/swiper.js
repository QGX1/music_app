/*
 * @Descripttion: 图片轮播js
 * @Author: qiuguixian
 * @Date: 2021-03-13 11:18:18
 * @LastEditors: qiuguixian
 * @LastEditTime: 2021-03-28 22:15:32
 */
export function Swiper(options) {
  this.params = options
  this.current = 0
  this.parentDom = document.querySelector(options.parentDom)
  this.init = () => {
    this.createDom()
    this.play()
  }

  // 将图片加上
  this.createDom = () => {
    let options = this.params
    this.parentDom.style.overflow = 'hidden'
    this.parentDom.style.position = 'relative'
    this.parentDom.style['touch-action'] = 'none'
    if (this.parentDom) {
      // 创建图片节点
      options.imgs.map((item, index) => {
        let imgDom = document.createElement('img')
        imgDom.src = item
        imgDom.className = options.imgClassName
        imgDom.style.height = `${this.parentDom.clientHeight}px`
        imgDom.style.width = `${this.parentDom.clientWidth}px`
        imgDom.style.position = 'absolute'
        imgDom.style.transition = 'all 0.5s'
        imgDom.style.left =
          index === 0 ? '0px' : `${this.parentDom.clientWidth * 1}px`
        this.parentDom.appendChild(imgDom)
      })

      // 创建上下两个按钮
      if (options.upDownWitch && options.upDownWitch.state) {
        let prevDom = document.createElement('div')
        let nextDom = document.createElement('div')
        let strStyle = `position:absolute;width:20px;height:40px;text-align:center;line-height:40px;font-weight:bold;color:#f3f3f3;
        font-size:22px;top:50%;transform:translateY(-50%);user-select: none;cursor: pointer;background:#0a292114;`
        prevDom.innerText = '<'
        prevDom.className = 'prev'
        prevDom.style.cssText = strStyle
        nextDom.innerText = '>'
        nextDom.className = 'next'
        nextDom.style.cssText = `${strStyle}right:0px;`
        this.parentDom.appendChild(prevDom)
        this.parentDom.appendChild(nextDom)
        // 事件委托
        this.parentDom.addEventListener(
          'click',
          ev => {
            let target = ev.target.className || ev.srcElement.className
            if (target === 'prev' || target === 'next') {
              this.jumpTo(target)
            }
          },
          { passive: false }
        )
      }
    }
  }
  // 上一页，下一页
  this.jumpTo = type => {
    clearInterval(this.timer) // 清除定时器
    let allImgDom = this.params.imgClassName
      ? this.parentDom.getElementsByClassName(this.params.imgClassName)
      : this.parentDom.getElementsByTagName('img')
    if (type === 'prev') {
      if (this.current !== 0) {
        allImgDom[this.current - 1].style.left = '0px'
        allImgDom[this.current].style.left = `${this.parentDom.clientWidth}px`
        this.current = this.current - 1
      }
    } else {
      if (this.current < allImgDom.length - 1) {
        allImgDom[this.current + 1].style.left = '0px'
        allImgDom[this.current].style.left = `-${this.parentDom.clientWidth}px`
        this.current = this.current + 1
      }
    }
    clearTimeout(this.timer2)
    this.timer2 = setTimeout(this.play, this.params.autoSwitch.duration)
  }
  // 自动轮播
  this.play = () => {
    this.timer = setInterval(() => {
      let allImgDom = this.params.imgClassName
        ? this.parentDom.getElementsByClassName(this.params.imgClassName)
        : this.parentDom.getElementsByTagName('img')

      if (this.current >= allImgDom.length - 1) {
        this.current = 0
        this.imgSort()
      } else {
        allImgDom[(this.current % allImgDom.length) + 1].style.left = '0px' // 后面一张
        allImgDom[this.current % allImgDom.length].style.left =
          -this.parentDom.clientWidth + 'px' // 前面一张位置修改

        this.current++
      }
    }, this.params.autoSwitch.duration)
  }

  // 进行图片重新排序
  this.imgSort = () => {
    let allImgDom = this.params.imgClassName
      ? this.parentDom.getElementsByClassName(this.params.imgClassName)
      : this.parentDom.getElementsByTagName('img')

    for (let i = 0, len = allImgDom.length; i < len; i++) {
      let imgDom = allImgDom[i]

      imgDom.style.left =
        i === 0 ? '0px' : `${this.parentDom.clientWidth * 1}px`
    }
  }

  return this.init()
}
