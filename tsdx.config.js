const replace = require("@rollup/plugin-replace")
const images = require("@rollup/plugin-image")
const postcss = require("rollup-plugin-postcss")
const svgr = require("@svgr/rollup")

module.exports = {
  rollup(config, options) {
    config.plugins = [
      images({ exclude: "*.svg" }),
      svgr(),
      postcss(),
      ...config.plugins
    ]

    config.plugins = config.plugins.map(plugin =>
      plugin.name === "replace"
        ? replace({
            "process.env.NODE_ENV": JSON.stringify(options.env),
            preventAssignment: true
          })
        : plugin
    )

    return config
  }
}
