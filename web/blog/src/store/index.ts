export const articleStore = defineStore("blog-store",

  () => {
    const blogInfo = ref({
      viewsCount: "",
      articleCount: 0,
      categoryCount: 0,
      tagCount: 0,
      websiteConfig: {
        articleCover: "",
        websiteNotice: "",
        touristAvatar: "",
        userAvatar: "",
        websiteAuthor: "",
        websiteAvatar: "",
        websiteCover: "",
        websiteCreateTime: "",
        websiteIntro: "",
        websiteName: "",
        websiteRecordNo: "",
      }
    })
    const loginUserInfo = ref({
      avatar: "",
      email: "",
      id: 1,
      intro: "",
      ipAddress: "",
      ipSource: "",
      lastLoginTime: 0,
      loginType: 1,
      nickname: "",
      userInfoId: 1,
      username: "",
      webSite: "",
    })
    const isLogin = ref(false)
    const showSearchModal = ref(false)
    const showLoginModal = ref(false)
    const saveBlogInfo = (info: any) => {
      console.log('info', blogInfo.value);

      blogInfo.value = info
      console.log(blogInfo.value);

    }
    const saveLoginUserInfo = (info: any) => {
      isLogin.value = true;
      loginUserInfo.value = info;
    }
    const logout = () => {
      loginUserInfo.value = {
        avatar: "",
        email: "",
        id: 1,
        intro: "",
        ipAddress: "",
        ipSource: "",
        lastLoginTime: 0,
        loginType: 1,
        nickname: "",
        userInfoId: 1,
        username: "",
        webSite: "",
      };
      isLogin.value = false;
    }
    function test() {

    }
    return {
      blogInfo, loginUserInfo, isLogin, showLoginModal, showSearchModal, saveBlogInfo, saveLoginUserInfo, logout, test
    }
  },
  {
    persist: {
      enabled: true, // 开启数据缓存
      strategies: [
        {
          storage: sessionStorage,
          paths: ["blogInfo", 'loginUserInfo'], //只对指定的state进行缓存
        },
      ],
    }

  },
)
export const useStore = () => storeToRefs(articleStore())
