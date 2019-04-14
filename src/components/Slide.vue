<template>
  <div class="slide" ref="slide">
    <div class="slide-group" ref="slideGroup">
      <slot>
      </slot>
    </div>
    <div v-if="showDot" class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots" :key="index"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { addClass } from '@/common/js/dom'
  // import BScroll from 'scroll/index'
import BScroll from 'better-scroll'

  const COMPONENT_NAME = 'slide'

  export default {
    name: COMPONENT_NAME,
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      showDot: {
        type: Boolean,
        default: true
      },
      click: {
        type: Boolean,
        default: true
      },
      threshold: {
        type: Number,
        default: 0.3
      },
      speed: {
        type: Number,
        default: 400
      }
    },
    data() {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    mounted() {
      this.update()

      window.addEventListener('resize', () => {
        if (!this.slide || !this.slide.enabled) {
          return
        }
        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(() => {
          if (this.slide.isInTransition) {
            this._onScrollEnd()
          } else {
            if (this.autoPlay) {
              this._play()
            }
          }
          this.refresh()
        }, 60)
      })
    },
    activated() {
      if (!this.slide) {
        return
      }
      this.slide.enable()
      let pageIndex = this.slide.getCurrentPage().pageX
      this.slide.goToPage(pageIndex, 0, 0)
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this._play()
      }
    },
    deactivated() {
      this.slide.disable()
      clearTimeout(this.timer)
    },
    beforeDestroy() {
      this.slide.disable()
      clearTimeout(this.timer)
    },
    methods: {
      update() {
        if (this.slide) {
          this.slide.destroy()
        }
        this.$nextTick(() => {
          this.init()
        })
      },
      refresh() {
        this._setSlideWidth(true)
        this.slide.refresh()
      },
      prev() {
        this.slide.prev()
      },
      next() {
        this.slide.next()
      },
      init() {
        clearTimeout(this.timer)
        this.currentPageIndex = 0
        this._setSlideWidth()
        if (this.showDot) {
          this._initDots()
        }
        this._initSlide()

        if (this.autoPlay) {
          this._play()
        }
      },
      _setSlideWidth(isResize) {
        this.children = this.$refs.slideGroup.children

        let width = 0
        let slideWidth = this.$refs.slide.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slide-item')

          child.style.width = slideWidth + 'px'
          width += slideWidth
        }
        if (this.loop && !isResize) {
          width += 2 * slideWidth
        }
        this.$refs.slideGroup.style.width = width + 'px'
      },
      _initSlide() {
        console.log(this.threshold)
        this.slide = new BScroll(this.$refs.slide, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: this.loop,
            threshold: this.threshold,
            speed: this.speed
          },
          bounce: false,
          stopPropagation: true,
          click: this.click
        })

        this.slide.on('scrollEnd', this._onScrollEnd)

        this.slide.on('touchEnd', () => {
          if (this.autoPlay) {
            this._play()
          }
        })

        this.slide.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this.timer)
          }
        })
      },
      _onScrollEnd() {
        let pageIndex = this.slide.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
          this._play()
        }
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _play() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.slide.next()
        }, this.interval)
      }
    },
    watch: {
      loop() {
        this.update()
      },
      autoPlay() {
        this.update()
      },
      speed() {
        this.update()
      },
      threshold() {
        this.update()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// 颜色定义规范
//// 主基调
$color-main = #007bff
$color-main-ll = #5aaaff
$color-main-l = #3b99fc
$color-main-d = #0069d9

$color-orange = #fc9153
$color-regular-blue= #4a4c5b
$color-background = #f3f4f5
$color-background-grew = #e8864c
$color-background-grey = #f2f2f2
$color-title-background = #f7f7f7

//// 文字信息
$color-dark-grey = #333
$color-grey = #666
$color-light-grey = #999
$color-light-grey-s = #ccc
$color-light-grey-ss = #eee
$color-white = #fff
//// 其他辅色

////// 灰色
$color-light-grey-sss = #fcfcfc
////// 橘色
$color-dark-orange = #f08250
$color-light-orange = #fc9153
$color-grey-orange = #ffc4a6

////// 黄色
$color-dark-yellow = #ffd00b
$color-light-yellow = #ffe650
$color-grey-yellow = #ffedb4

////// 红色
$color-dark-red = #bd2630
$color-light-red = #db2a36
$color-grey-red = #ff525d

////// 粉色
$color-dark-pink = #aa337a
$color-light-pink = #d24b82
$color-grey-pink = #ef65ab

////// 紫色
$color-dark-purple = #48296d
$color-light-purple = #6a2d8e
$color-grey-purple = #af72c5

////// 黄绿色
$color-dark-greenyellow = #8bb93f
$color-light-greenyellow = #bfd141
$color-grey-greenyellow = #d5e08c

////// 绿色
$color-dark-deepgreen = #1b733e
$color-light-deepgreen = #50a050
$color-grey-deepgreen = #80c075
$color-green = #75D370
$color-green-opacity = rgba(117, 211, 112, .05)
$color-vue-green = #42b983
$color-vue-green-opacity = rgba(66, 185, 131, .05)

////// 深青色
$color-dark-cyan = #018172
$color-light-cyan = #28aa91
$color-grey-cyan = #71c3bc

////// 藏青色
$color-dark-cadetblue = #256ea8
$color-light-cadetblue = #3ca0e6
$color-grey-cadetblue = #96caf0

////// 蓝色
$color-dark-blue = #233c64
$color-light-blue = #1e4191
$color-grey-blue = #6e82d7

//// 横线色值
$color-row-line = #ebebeb
//// 竖线色值
$color-col-line = #f5f5f5

/// click & touch active background-color
$color-active-light-orange = rgba(252, 145, 83, .04)
$color-active-light-gray = rgba(0, 0, 0, .04)

/// click & touch active color
$color-active-light-orange-fe = #fdc2a5
$color-active-light-gray-fe = #c2c2c2

/// mask background-color
$color-mask-bgc = rgba(37, 38, 45, .4)

// 字体大小定义规范
$fontsize-large-xxxx = 30px
$fontsize-large-xxx = 24px
$fontsize-large-xx = 20px
$fontsize-large-x = 18px
$fontsize-large = 16px
$fontsize-medium = 14px
$fontsize-small = 12px
$fontsize-small-s = 10px

// 边框圆角大小
$radius-size-medium = 0.3rem
$radius-size-small = 0.1rem

/// 内容区阴影
$box-shadow-content = 0 1px 3px rgba(0, 0, 0, .1)

  .slide
    min-height: 1px
    position: relative
    overflow :hidden
    .slide-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slide-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      transform: translateZ(1px)
      text-align: center
      font-size: 0
      background :none
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-light-grey-s
        &.active
          width: 20px
          border-radius: 5px
          background: $color-white
</style>
