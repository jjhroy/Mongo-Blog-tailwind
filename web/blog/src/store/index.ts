// @ts-nocheck
export const useStore = defineStore("pinia", {
  state: () => {
    return {
      blogInfo: {
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
      },
      loginUserInfo: {
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
      },
      isLogin: false,
      showSearchModal: false,
      showLoginModal: false
    };
  },
  actions: {
    saveBlogInfo(blogInfo: any) {
      this.blogInfo = blogInfo;
    },
    saveLoginUserInfo(loginUserInfo: any) {
      this.isLogin = true;
      this.loginUserInfo = loginUserInfo;
    },
    logout() {
      this.loginUserInfo = {};
      this.isLogin = false;
    },
  },
  persist: {
    enabled: true, // 开启数据缓存
    strategies: [
      {
        storage: sessionStorage,
        paths: ["blogInfo", 'loginUserInfo'], //只对指定的state进行缓存
      },
    ],
  },
});


export const useArticleStore = () => storeToRefs(articleStore())