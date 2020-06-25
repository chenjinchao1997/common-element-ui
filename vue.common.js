module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin("fork-ts-checker").tap(args => {
      args[0].tsconfig = "../../tsconfig.json";
      return [...args];
    });
  }
};
