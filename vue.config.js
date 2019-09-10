module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_reset.scss";
          @import "https://fonts.googleapis.com/css?family=Bitter&display=swap";
          @import "https://fonts.googleapis.com/css?family=Space+Mono&display=swap";
          @import "@/assets/scss/_settings.scss";
        `
      }
    }
  }
};
