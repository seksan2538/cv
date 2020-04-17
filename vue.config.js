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

  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Seksan Neramitthanasombat'
      args[0].description = "A Seksan Neramitthanasombat's CV"
      args[0].keywords = ['seksan', 'neramitthanasombat', 'nekomania420', 'cv', 'resume']
      args[0].robots = ['index', 'follow']
      return args
    })
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/cv/' : '/',
}
