module.exports = {
  addons: [
    "@storybook/addon-jest",
    "@storybook/addon-design-assets",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-essentials"
  ],
  core: {
    builder: "webpack5",
    enableCrashReports: false
  },
  framework: "@storybook/react",
  stories: ["../**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.less$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          }
        },
        "less-loader"
      ]
    })
    config.module.rules.push({
      test: /\.(sass)$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          }
        },
        "sass-loader"
      ]
    })
    config.module.rules.push({
      test: /\.(scss|pcss|sss)$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          }
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: ["postcss-preset-env", "postcss-nested"]
            }
          }
        }
      ]
    })
    config.module.rules.push({
      test: /\.styl(|us)$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          }
        },
        "stylus-loader"
      ]
    })
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack"
        },
        {
          loader: "file-loader",
          options: {
            name: "static/media/[path][name].[ext]"
          }
        }
      ],
      type: "javascript/auto",
      issuer: /\.(ts|tsx|js|jsx|md|mdx)$/i
    })

    return config
  }
}
