module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/_variables";
          @import "bootstrap/scss/_functions";
          @import "bootstrap/scss/_variables";
          @import "bootstrap/scss/_mixins";
        `,
      },
    },
  },
}
