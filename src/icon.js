module.exports = {
    files: [
        "./svg/*.svg",
    ],
    fontName: "icons",
    fixedWidth: true,
    types: ["eot", "woff", "ttf", "svg"],
    baseSelector: ".i",
    classPrefix: "i-",
    cssTemplate: "./template.hbs" //输出默认css模板的路径
};