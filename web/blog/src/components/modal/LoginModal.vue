<template>
  <blog-modal
    v-model:visible="pinia.showLoginModal"
    :header="false"
    :footer="false"
    :padding-hide="true"
  >
    <template #body>
      <div :class="'owl' + owlStyle" id="owl">
        <div class="hand"></div>
        <div class="hand hand-r"></div>
        <div class="arms">
          <div class="arm"></div>
          <div class="arm arm-r"></div>
        </div>
      </div>
      <div class="flex">
        <div
          class="relative overflow-hidden w-[250px] h-[400px] bg-cover bg-center bg-no-repeat z-1 rounded-l-md"
          :style="`background-image: url(${imgUrl});`"
        ></div>
        <div class="w-[350px] p-4 my-auto">
          <div class="text-[#303133] font-bold text-[18px] text-center mb-2">
            <h3>登录</h3>
          </div>
          <blog-form-item>
            <blog-input
              :border="false"
              placeholder="请输入邮箱"
              :width="320"
              v-model:value="loginForm.username"
            ></blog-input>
          </blog-form-item>
          <blog-form-item class="w-[320px]">
            <blog-input
              :width="320"
              :border="false"
              placeholder="请输入密码"
              type="password"
              v-model:value="loginForm.password"
            ></blog-input>
          </blog-form-item>
          <blog-form-item>
            <blog-button type="primary" class="w-[320px]" @click="getResponse"
              >登录</blog-button
            >
          </blog-form-item>
        </div>
      </div>
    </template>
  </blog-modal>
</template>
<script setup lang="ts">
import BlogButton from '../common/BlogButton.vue'
import BlogFormItem from '../common/BlogFormItem.vue'
import BlogInput from '../common/BlogInput.vue'
import BlogModal from '../common/BlogModal.vue'
import { reactive, ref } from 'vue'
import config from '@/config/config'
import { useStore } from '@/store/index'
import { useRoute } from 'vue-router'
import { userLogin } from '@/api/auth'
import { loginParams } from '@/types/api/auth'

const pinia = useStore()
const imgUrl = ref('https://upload.linkstarted.top/cloudfile/anya.jpg')
const owlStyle = ref('')
const loginForm = ref({
  username: '',
  password: '',
})

const getResponse = async () => {
  //请求滑动验证码
  //@ts-ignore
  var captcha = new TencentCaptcha(config.TENCENT_CAPTCHA, async (res: any) => {
    if (res.ret === 0) {
      //登录
      let params: loginParams = {
        username: loginForm.value.username,
        password: loginForm.value.password,
      }
      const data = await userLogin(params)
      pinia.showLoginModal = false
      pinia.isLogin = true
      pinia.saveLoginUserInfo(data)
    }
  })
  // 显示滑动验证码
  captcha.show()
}
</script>
<style lang="scss" scoped>
/* 接下来是猫头鹰的样式 */
.owl {
  width: 211px;
  height: 108px;
  /* 背景图片 */
  background: url('https://upload.linkstarted.top/cloud/1c0a045d44d61609399c4b1a51ada0e6.png')
    no-repeat;
  /* 绝对定位 */
  position: absolute;
  top: -100px;
  /* 水平居中 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.owl .hand {
  width: 34px;
  height: 34px;
  border-radius: 40px;
  background-color: #472d20;
  /* 绝对定位 */
  position: absolute;
  left: 12px;
  bottom: -8px;
  /* 沿Y轴缩放0.6倍（压扁） */
  transform: scaleY(0.6);
  /* 动画过渡 */
  transition: 0.3s ease-out;
}
.owl .hand.hand-r {
  left: 170px;
}
.owl.password .hand {
  transform: translateX(42px) translateY(-15px) scale(0.7);
}
.owl.password .hand.hand-r {
  transform: translateX(-42px) translateY(-15px) scale(0.7);
}
.owl .arms {
  position: absolute;
  top: 58px;
  width: 100%;
  height: 41px;
  overflow: hidden;
}
.owl .arms .arm {
  width: 40px;
  height: 65px;
  position: absolute;
  left: 20px;
  top: 40px;
  background: url('https://upload.linkstarted.top/cloud/52c30e8b6c6180b7ad2317f51356f174.png')
    no-repeat;
  transform: rotate(-20deg);
  transition: 0.3s ease-out;
}
.owl .arms .arm.arm-r {
  transform: rotate(20deg) scaleX(-1);
  left: 158px;
}
.owl.password .arms .arm {
  transform: translateY(-40px) translateX(40px);
}
.owl.password .arms .arm.arm-r {
  transform: translateY(-40px) translateX(-40px) scaleX(-1);
}
.form-container {
  display: flex;
  .pic-left {
    z-index: 1;
    position: relative;
    width: 250px;
    height: 400px;
    overflow: hidden;
    background: url('https://upload.linkstarted.top/cloudfile/anya.jpg') center
      no-repeat;
    background-size: cover;
  }
  .form-right {
    width: 350px;
    padding: 16px;
    .form-header {
      color: #303133;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 24px;
      text-align: center;
    }
    .form-footer {
      display: flex;
      flex-direction: column;
      .forget-register {
        display: flex;
        justify-content: space-between;
      }
      .social-login {
        display: flex;
        justify-content: space-between;
        margin: 0 96px;
      }
      .test-account {
        text-align: center;
        margin-top: 12px;
      }
    }
  }
}
</style>
