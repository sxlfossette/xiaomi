<template>
    <transition name="slide">
          <div class="modal" v-show="showModal">
        <div class="mask"></div>
        <div class="modal-dialog">
            <div class="modal-header">
                <span>{{title}}</span>
                <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
            </div>
            <div class="modal-body">
                <!-- 定义插槽 -->
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                 <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">{{sureText}}</a>
                 <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">{{cancelText}}</a>
                <div class="btn-group" v-if="btnType==3">
                    <!-- 子组件点击事件后要传到父组件，而父子传递由emit来传递，因此父组件需要定义submit事件 -->
                    <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn" v-on:click="$emit('cancel')">{{cancelText}}</a>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>
<script>
export default {
  name: 'modal',
  props: {
    // 弹框类型：小small、中middle、大large、表单form
    modalType: {
      type: String,
      default: 'from'
    },
    // 弹框标题
    title: String,
    // 按钮类型：1.确定按钮 2.取消按钮 3.确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/modal.scss';
</style>
